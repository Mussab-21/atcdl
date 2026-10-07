"use client";
import { useCallback, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Plus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField, Input, Select, Textarea } from "@/components/ui/Form";
import { Turnstile } from "./Turnstile";
import { OFFERINGS, resolveOffering } from "@/lib/leads/offerings";
import { LeadSchema } from "@/lib/leads/schema";
import { track } from "@/lib/analytics";
import { PRODUCTS_LAB_DATA } from "@/content/products-lab-data";
export function ContactFormClient() {
  const params = useSearchParams();
  return <InquiryForm key={params.toString()} query={params.toString()} />;
}
function InquiryForm({ query }: { query: string }) {
  const params = new URLSearchParams(query);
  const router = useRouter();
  const product = PRODUCTS_LAB_DATA.products.find(
    (p) => p.slug === params.get("product"),
  );
  const intent =
    params.get("intent") === "consultation"
      ? "consultation"
      : params.get("intent") === "demo" || product
        ? "demo"
        : "project";
  const context =
    product?.name ||
    params.get("service") ||
    params.get("solution") ||
    params.get("industry") ||
    params.get("idea");
  const title =
    intent === "demo"
      ? "See what’s possible."
      : intent === "consultation"
        ? "A clearer way forward."
        : "Let’s build what’s next.";
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: resolveOffering(
      params.get("projectType") ||
        params.get("solution") ||
        params.get("service"),
    ),
    problem: params.get("summary") || "",
    existingSystems: "",
    budget: [
      "$5K–$10K",
      "$10K–$25K",
      "$25K–$50K",
      "$50K–$100K",
      "$100K+",
    ].includes(params.get("budget") || "")
      ? params.get("budget")!
      : "Not sure yet",
    timeline: ["< 1 month", "1–3 months", "3–6 months", "6+ months"].includes(
      params.get("timeline") || "",
    )
      ? params.get("timeline")!
      : "Not sure yet",
    honeypot: "",
    turnstileToken: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const started = useRef(false);
  const summary = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const update = (key: keyof typeof data, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
    if (!started.current) {
      track("contact_started", { intent });
      started.current = true;
    }
  };
  const onToken = useCallback(
    (token: string) => setData((prev) => ({ ...prev, turnstileToken: token })),
    [],
  );
  const onChallengeError = useCallback(
    () =>
      setMessage(
        "Verification could not load. Please check your connection and try again.",
      ),
    [],
  );
  const showErrors = (details: Record<string, string>, text: string) => {
    setErrors(details);
    setMessage(text);
    requestAnimationFrame(() => {
      summary.current?.focus();
      summary.current?.scrollIntoView({ block: "center", behavior: "auto" });
    });
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    const payload = {
      ...data,
      problem:
        data.problem.trim() ||
        (intent === "demo"
          ? `Request a demonstration of ${product?.name || "ATC products"}.`
          : ""),
      source: product ? `product_${product.slug}` : `intent_${intent}`,
      context: context || "",
    };
    const parsed = LeadSchema.safeParse(payload);
    if (!parsed.success) {
      const fields = Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [
          k,
          v?.[0] || "Please check this field.",
        ]),
      );
      track("contact_validation_failed", {
        intent,
        fields: Object.keys(fields).join(","),
      });
      showErrors(fields, "Please check the highlighted fields.");
      return;
    }
    setBusy(true);
    setMessage("");
    track("contact_submit_attempted", { intent });
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        const fields = Object.fromEntries(
          Object.entries(result.details || {}).map(([k, v]) => [
            k,
            Array.isArray(v) ? String(v[0]) : String(v),
          ]),
        );
        track("contact_submit_failed", { intent, status: response.status });
        showErrors(
          fields,
          result.error ||
            "Your request could not be saved. Please try again; your details are still here.",
        );
        setAttempt((a) => a + 1);
        onToken("");
        return;
      }
      track("contact_submitted", { intent, projectType: data.projectType });
      if (intent === "demo")
        track("product_demo_requested", {
          product: product?.slug || "general",
        });
      router.push("/contact/thank-you");
    } catch {
      track("contact_submit_failed", { intent, status: "network" });
      showErrors(
        {},
        "We couldn’t connect. Please try again; your details are still here.",
      );
      setAttempt((a) => a + 1);
      onToken("");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="container-custom inquiry-layout">
      <div className="inquiry-intro">
        <span className="eyebrow">
          {intent === "demo"
            ? "PRODUCT DEMONSTRATION"
            : intent === "consultation"
              ? "TECHNOLOGY CONSULTATION"
              : "START A CONVERSATION"}
        </span>
        <h1>{title}</h1>
        <p>
          {intent === "demo"
            ? "Tell us which product interests you. We’ll discuss its current capabilities and arrange the right next step."
            : "Tell us what you’re working on. You don’t need a technical brief to start a useful conversation."}
        </p>
        <div className="inquiry-expect">
          <span className="eyebrow">WHAT HAPPENS NEXT</span>
          <p>01 — We review your goals and context.</p>
          <p>02 — We follow up with questions or a conversation.</p>
          <p>03 — Together, we agree a practical next step.</p>
          <Link href="/work" className="text-link">
            Explore our work <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="inquiry-card">
        <form
          ref={form}
          noValidate
          onSubmit={submit}
          aria-label="Project inquiry"
        >
          {context && (
            <div className="inquiry-context">
              You’re asking about{" "}
              <strong>{context.replaceAll("-", " ")}</strong>. Add any
              preferences in your message.
            </div>
          )}
          {message && (
            <div
              ref={summary}
              tabIndex={-1}
              role="alert"
              className="inquiry-error"
            >
              {message}
              {Object.entries(errors).filter(([, v]) => v).length > 0 && (
                <ul className="mt-2 space-y-1">
                  {Object.entries(errors)
                    .filter(([, v]) => v)
                    .map(([key, value]) => (
                      <li key={key}>
                        <a className="underline" href={`#inquiry-${key}`}>
                          {value}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          )}
          <input
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={data.honeypot}
            onChange={(e) => update("honeypot", e.target.value)}
            aria-hidden="true"
          />
          <div className="form-two">
            <FormField label="Your name" required error={errors.name}>
              <Input
                id="inquiry-name"
                name="name"
                autoComplete="name"
                maxLength={100}
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </FormField>
            <FormField label="Work email" required error={errors.email}>
              <Input
                id="inquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={150}
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </FormField>
          </div>
          <FormField label="Company (optional)" error={errors.company}>
            <Input
              id="inquiry-company"
              name="company"
              autoComplete="organization"
              maxLength={150}
              value={data.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </FormField>
          {intent !== "demo" && (
            <FormField
              label="What can we help with?"
              error={errors.projectType}
            >
              <Select
                id="inquiry-projectType"
                name="projectType"
                value={data.projectType}
                onChange={(e) => update("projectType", e.target.value)}
                options={OFFERINGS.map((o) => ({
                  value: o.value,
                  label: o.label,
                }))}
              />
            </FormField>
          )}
          <FormField
            label={
              intent === "demo"
                ? "Anything you’d like to explore? (optional)"
                : "What would you like to improve?"
            }
            required={intent !== "demo"}
            error={errors.problem}
            hint={
              intent === "demo"
                ? "A specific use case helps us tailor the conversation."
                : "A few sentences about your goals is enough. Please don’t include confidential data."
            }
          >
            <Textarea
              id="inquiry-problem"
              name="problem"
              rows={4}
              maxLength={3000}
              placeholder="We’re looking for a better way to…"
              value={data.problem}
              onChange={(e) => update("problem", e.target.value)}
            />
          </FormField>
          {intent !== "demo" && (
            <details className="inquiry-optional">
              <summary>
                <Plus size={16} />
                Add project details (optional)
              </summary>
              <div>
                <div className="form-two">
                  <FormField label="Budget range">
                    <Select
                      value={data.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      options={[
                        "Not sure yet",
                        "$5K–$10K",
                        "$10K–$25K",
                        "$25K–$50K",
                        "$50K–$100K",
                        "$100K+",
                      ].map((v) => ({ value: v, label: v }))}
                    />
                  </FormField>
                  <FormField label="When would you like to start?">
                    <Select
                      value={data.timeline}
                      onChange={(e) => update("timeline", e.target.value)}
                      options={[
                        "Not sure yet",
                        "< 1 month",
                        "1–3 months",
                        "3–6 months",
                        "6+ months",
                      ].map((v) => ({ value: v, label: v }))}
                    />
                  </FormField>
                </div>
                <FormField
                  label="Existing tools or systems"
                  error={errors.existingSystems}
                >
                  <Input
                    id="inquiry-existingSystems"
                    value={data.existingSystems}
                    maxLength={1000}
                    onChange={(e) => update("existingSystems", e.target.value)}
                    placeholder="For example: Microsoft 365, an ERP, spreadsheets"
                  />
                </FormField>
              </div>
            </details>
          )}
          <p className="inquiry-privacy">
            We use your details to respond to your inquiry, with our hosting and
            communication providers.{" "}
            <Link href="/privacy">How we handle your information</Link>.
          </p>
          <Turnstile
            key={attempt}
            onSuccess={onToken}
            onError={onChallengeError}
          />
          <div className="inquiry-submit">
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} />
              No technical brief needed
            </span>
            <Button type="submit" size="lg" isLoading={busy}>
              {busy
                ? "Sending…"
                : intent === "demo"
                  ? "Request a demo"
                  : "Send your inquiry"}
              <ArrowUpRight size={17} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
