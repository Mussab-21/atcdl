"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
const groups = [
  {
    title: "Our expertise",
    items: [
      ["AI & intelligent systems", "/services#ai"],
      ["Software development", "/services#software"],
      ["System integration", "/services#integration"],
      ["Cloud & infrastructure", "/services#cloud"],
      ["Cybersecurity", "/services#cybersecurity"],
      ["Managed services", "/services#managed-services"],
      ["Technology consulting", "/services#consulting"],
    ],
  },
  {
    title: "Business solutions",
    items: [
      ["Private AI assistants", "/solutions/custom-ai"],
      ["Workflow automation", "/solutions/ai-agents"],
      ["Enterprise software", "/solutions/enterprise-software"],
      ["Web & mobile platforms", "/solutions/web-mobile-platforms"],
    ],
  },
  {
    title: "Industry focus",
    items: [
      ["Telecommunications", "/industries#telecom"],
      ["Banking & finance", "/industries#banking"],
      ["Manufacturing", "/industries#manufacturing"],
      ["Logistics", "/industries#logistics"],
    ],
  },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setMobile(false);
  };
  useEffect(() => {
    const outside = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) close();
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        (mobile ? mobileTrigger : trigger).current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [mobile]);
  return (
    <header
      ref={header}
      className="site-header"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <div className="nav-inner">
        <Link
          href="/"
          onClick={close}
          className="brand"
          aria-label="ATC Digital Labs home"
        >
          <span className="brand-symbol" aria-hidden="true">
            a<span>↗</span>
          </span>
          <span>
            ATC<span className="brand-sub">DIGITAL LABS</span>
          </span>
        </Link>
        <nav className="desktop-links" aria-label="Main navigation">
          <button
            ref={trigger}
            aria-expanded={open}
            aria-controls="expertise-menu"
            onClick={() => setOpen(!open)}
          >
            What we do <ChevronDown size={14} />
          </button>
          {[
            ["Products", "/products"],
            ["Our work", "/work"],
            ["About", "/about"],
          ].map(([name, href]) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link
          className="nav-cta"
          href="/contact?intent=project"
          onClick={close}
        >
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          ref={mobileTrigger}
          className="mobile-toggle"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mega-panel" id="expertise-menu">
          <div className="mega-intro">
            <span className="eyebrow">From possibility to production</span>
            <p>
              Technology that moves
              <br />
              your business forward.
            </p>
            <Link href="/services" onClick={close}>
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h2>{g.title}</h2>
              {g.items.map(([name, href]) => (
                <Link key={href} href={href} onClick={close}>
                  {name}
                  <ArrowUpRight size={13} />
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
      {mobile && (
        <nav
          className="mobile-panel"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {groups.map((g) => (
            <details key={g.title}>
              <summary>
                {g.title}
                <ChevronDown size={16} />
              </summary>
              {g.items.map(([name, href]) => (
                <Link key={href} href={href} onClick={close}>
                  {name}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </details>
          ))}
          {[
            ["Products", "/products"],
            ["Our work", "/work"],
            ["About ATC", "/about"],
            ["Project estimator", "/estimate"],
            ["Discuss your project", "/contact"],
          ].map(([name, href]) => (
            <Link key={href} href={href} onClick={close}>
              {name}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
