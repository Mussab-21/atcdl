import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "default",
      hoverEffect = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative rounded-[var(--radius-md)] border transition-all duration-300";

    const variantStyles = {
      default: "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-primary)]",
      elevated:
        "bg-[var(--bg-elevated)] border-[var(--border)] shadow-xl shadow-black/40 text-[var(--text-primary)]",
      interactive:
        "bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(77,141,255,0.08)] cursor-pointer text-[var(--text-primary)]",
    };

    const hoverStyles =
      hoverEffect && variant !== "interactive"
        ? "hover:border-[var(--border-hover)] hover:-translate-y-0.5"
        : "";

    return (
      <div
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={clsx("p-6 pb-4 flex flex-col gap-1.5", className)} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => <div className={clsx("p-6 pt-0", className)} {...props}>{children}</div>;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={clsx("p-6 pt-0 flex items-center justify-between mt-auto", className)}
    {...props}
  >
    {children}
  </div>
);
