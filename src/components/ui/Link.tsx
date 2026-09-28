import React from "react";
import NextLink from "next/link";
import { clsx } from "clsx";
import { ArrowRight, ExternalLink } from "lucide-react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "muted" | "arrow" | "button";
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  variant = "arrow",
  external = false,
  className,
  ...props
}) => {
  const isExternal = external || href.startsWith("http");

  const baseStyles =
    "inline-flex items-center gap-1.5 transition-colors duration-200 group font-medium";

  const variantStyles = {
    primary: "text-[var(--accent)] hover:text-[var(--accent-hover)]",
    secondary: "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
    muted: "text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-sm",
    arrow:
      "text-[var(--accent)] hover:text-[var(--accent-hover)] [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-1",
    button:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] px-4 py-2.5 rounded-[var(--radius-btn)] shadow-sm hover:shadow-[0_0_20px_rgba(77,141,255,0.35)] text-sm [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-1",
  };

  const content = (
    <>
      <span>{children}</span>
      {variant === "arrow" && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {variant === "button" && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {isExternal && variant !== "arrow" && variant !== "button" && (
        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {content}
    </NextLink>
  );
};
