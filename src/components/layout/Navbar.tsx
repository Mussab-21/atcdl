"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { clsx } from "clsx";

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
      className="fixed top-0 left-0 right-0 z-50 h-[76px] sm:h-[84px] bg-[#102c2c] text-white border-b border-white/10 backdrop-blur-md"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) close();
      }}
    >
      <div className="container-custom h-full flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Brand Left */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-3.5 select-none shrink-0 justify-self-start"
          aria-label="ATC Digital Labs home"
        >
          <Image
            src="/atc-logo.png"
            alt="ATC Digital Labs"
            width={120}
            height={120}
            className="h-[46px] w-[46px] sm:h-[58px] sm:w-[58px] object-contain rounded-lg shrink-0"
            priority
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-extrabold text-xl sm:text-[26px] tracking-tight text-white leading-none">
              ATC
            </span>
            <span className="font-bold text-[8px] sm:text-[9.5px] tracking-[0.2em] text-[#aff2ce] mt-1 leading-none">
              DIGITAL LABS
            </span>
          </div>
        </Link>

        {/* Desktop Links Centered */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 lg:gap-11 justify-self-center"
          aria-label="Main navigation"
        >
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
                className={clsx(
                  "relative py-2 text-[16px] lg:text-[16.5px] font-medium transition-colors select-none",
                  isActive
                    ? "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00d477] after:rounded-full"
                    : "text-[#dbe7e2] hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-[#00d477]/70 hover:after:rounded-full"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button Right */}
        <div className="hidden md:flex items-center justify-self-end">
          <Link
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#00d477] text-[#071b3b] text-sm font-bold shadow-md hover:bg-[#00ea83] hover:-translate-y-0.5 transition-all shadow-[0_2px_10px_rgba(0,212,119,0.25)] hover:shadow-[0_4px_16px_rgba(0,212,119,0.4)]"
            href="/contact?intent=project"
            onClick={close}
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={mobileTrigger}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobile && (
        <nav
          className="md:hidden border-b border-white/10 bg-[#11262d] px-6 py-5 flex flex-col gap-2 shadow-2xl"
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
                className={clsx(
                  "flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium border-b border-white/5 transition-colors",
                  isActive
                    ? "bg-[#00d477]/10 text-[#00d477] font-semibold"
                    : "text-[#e2ecf5] hover:text-white hover:bg-white/5"
                )}
              >
                <span>{item.name}</span>
                <ArrowUpRight size={18} />
              </Link>
            );
          })}
          <Link
            href="/contact?intent=project"
            onClick={close}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#00d477] text-[#071b3b] text-sm font-bold hover:bg-[#00ea83] transition-colors shadow-lg shadow-[rgba(0,212,119,0.25)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
