"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);

  const close = () => {
    setMobile(false);
  };

  useEffect(() => {
    const outside = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) close();
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        mobileTrigger.current?.focus();
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
          <Image
            src="/atc-logo.png"
            alt="ATC Digital Labs Logo"
            width={160}
            height={48}
            className="h-10 sm:h-11 w-auto max-w-[170px] object-contain rounded-md"
            priority
          />
        </Link>

        <nav className="desktop-links" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "active" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link
            className="nav-cta"
            href="/contact?intent=project"
            onClick={close}
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <button
          ref={mobileTrigger}
          className="mobile-toggle"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobile && (
        <nav
          className="mobile-panel"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                <ArrowUpRight size={16} />
              </Link>
            );
          })}
          <Link
            href="/contact?intent=project"
            onClick={close}
            className="mobile-cta-link"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
