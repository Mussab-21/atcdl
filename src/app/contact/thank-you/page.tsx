import { cookies } from "next/headers";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
export default async function ThankYouPage() {
  const receipt = (await cookies()).get("atc-inquiry-receipt")?.value;
  return (
    <div className="container-custom py-24 max-w-2xl">
      <div className="inquiry-card text-center">
        <CheckCircle2 className="mx-auto mb-6 text-[var(--accent)]" size={42} />
        <span className="eyebrow justify-center">
          {receipt ? "INQUIRY SAVED" : "LET’S START A CONVERSATION"}
        </span>
        <h1 className="text-4xl tracking-tight mt-4 mb-5">
          {receipt
            ? "Thanks. We have your inquiry."
            : "Have a project in mind?"}
        </h1>
        <p className="text-[var(--text-secondary)] leading-7">
          {receipt
            ? "Our team will review your message and follow up using the email address you provided."
            : "Send us your goals and we’ll help you explore the next step."}
        </p>
        {receipt && (
          <p className="text-xs my-6 break-all">
            Your reference: <code>{receipt}</code>
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href={receipt ? "/work" : "/contact"} className="studio-button">
            {receipt ? "Explore our work" : "Contact the team"}
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/" className="text-link">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
