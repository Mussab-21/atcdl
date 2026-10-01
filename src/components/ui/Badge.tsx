import React from "react";
import { clsx } from "clsx";

export type StatusType =
  | "Ready for Demo"
  | "Pilot Ready"
  | "Beta"
  | "Prototype"
  | "Concept"
  | "Client Project"
  | "Internal Project"
  | "Open Source"
  | "R&D"
  | "In Development"
  | "Live"
  // Backward compatibility
  | "Client"
  | "Product"
  | "Lab";

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
      case "Client Project":
      case "Client":
        effectiveVariant = "success";
        break;
      case "Ready for Demo":
      case "Pilot Ready":
      case "Beta":
      case "Product":
        effectiveVariant = "ai";
        break;
      case "Prototype":
        effectiveVariant = "warning";
        break;
      case "Internal Project":
      case "Open Source":
      case "R&D":
      case "Lab":
        effectiveVariant = "default";
        break;
      case "In Development":
        effectiveVariant = "warning";
        break;
      case "Live":
        effectiveVariant = "success";
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
      "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]",
    success:
      "bg-[#EAF8F1] text-[#0E7A4E] border border-[#A8E5C8]",
    warning:
      "bg-[#FEF7EC] text-[#975A16] border border-[#FCE1B6]",
    error:
      "bg-[#FEF1F0] text-[#B42318] border border-[#FECDCA]",
    ai: "bg-[#E6F7F6] text-[#006663] border border-[#99DEDC]",
    outline:
      "bg-transparent text-[var(--text-secondary)] border border-[var(--border)]",
  };

  const dotColor = {
    default: "bg-[var(--text-muted)]",
    success: "bg-[#0E7A4E]",
    warning: "bg-[#975A16]",
    error: "bg-[#B42318]",
    ai: "bg-[#008F8A] animate-pulse",
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
