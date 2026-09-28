import React from "react";
import { clsx } from "clsx";

export type StatusType =
  | "Client"
  | "Product"
  | "Prototype"
  | "Lab"
  | "Concept"
  | "Open Source";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: StatusType;
  variant?: "default" | "success" | "warning" | "error" | "ai" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  status,
  variant,
  size = "sm",
  dot = true,
  className,
  ...props
}) => {
  // Determine styles from status if provided
  let effectiveVariant = variant || "default";
  let displayLabel = children;

  if (status) {
    displayLabel = status;
    switch (status) {
      case "Client":
        effectiveVariant = "success";
        break;
      case "Product":
        effectiveVariant = "ai";
        break;
      case "Prototype":
        effectiveVariant = "warning";
        break;
      case "Lab":
      case "Open Source":
        effectiveVariant = "default";
        break;
      case "Concept":
        effectiveVariant = "outline";
        break;
    }
  }

  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full tracking-wide uppercase transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  const variantStyles = {
    default:
      "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]",
    success:
      "bg-[rgba(53,201,139,0.12)] text-[var(--success)] border border-[rgba(53,201,139,0.25)]",
    warning:
      "bg-[rgba(243,184,75,0.12)] text-[var(--warning)] border border-[rgba(243,184,75,0.25)]",
    error:
      "bg-[rgba(255,98,98,0.12)] text-[var(--error)] border border-[rgba(255,98,98,0.25)]",
    ai: "bg-[rgba(57,214,208,0.1)] text-[var(--accent-ai)] border border-[rgba(57,214,208,0.3)] shadow-[0_0_10px_rgba(57,214,208,0.15)]",
    outline:
      "bg-transparent text-[var(--text-muted)] border border-[var(--border)]",
  };

  const dotColor = {
    default: "bg-[var(--text-muted)]",
    success: "bg-[var(--success)]",
    warning: "bg-[var(--warning)]",
    error: "bg-[var(--error)]",
    ai: "bg-[var(--accent-ai)] animate-pulse",
    outline: "bg-[var(--text-muted)]",
  };

  return (
    <span
      className={clsx(baseStyles, sizeStyles[size], variantStyles[effectiveVariant], className)}
      {...props}
    >
      {dot && (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-full shrink-0",
            dotColor[effectiveVariant]
          )}
        />
      )}
      {displayLabel}
    </span>
  );
};
