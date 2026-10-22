import React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "span";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "ai";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-[var(--radius-btn)] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 min-h-11",
      md: "text-sm px-4 py-2.5 gap-2 min-h-11",
      lg: "text-base px-6 py-3.5 gap-2.5 h-12",
    };

    const variantStyles = {
      primary:
        "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md hover:shadow-[rgba(21,94,239,0.2)] border border-transparent",
      secondary:
        "bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border)]",
      outline:
        "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg-soft-blue)]",
      ghost:
        "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]",
      ai: "bg-[var(--bg-card)] text-[#006663] border border-[#99DEDC] hover:bg-[#E6F7F6]",
    };

    if (as === "span") return <span className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}>{children}</span>;
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
