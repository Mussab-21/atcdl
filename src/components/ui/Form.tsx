import React, { useId } from "react";
import { clsx } from "clsx";

export interface FormFieldProps {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactElement<{ id?: string; required?: boolean; "aria-describedby"?: string; "aria-invalid"?: boolean }>;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  hint,
  required,
  children,
  className,
}) => {
  const generatedId = useId();
  const inputId = children.props.id || generatedId;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  return (
    <div className={clsx("flex flex-col gap-2 w-full", className)}>
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-[var(--text-secondary)] flex flex-col items-start gap-2"
      >
        <span>
          {label} {required && <span className="text-[var(--accent)]">*</span>}
        </span>
        {hint && !error && (
          <span id={hintId} className="text-sm font-normal text-[var(--text-muted)]">
            {hint}
          </span>
        )}
      </label>

      {React.cloneElement(children, {
        id: inputId,
        required,
        "aria-describedby": error ? errorId : hint ? hintId : undefined,
        "aria-invalid": !!error,
      })}

      {error && (
        <span
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-xs text-[var(--error)] font-mono flex items-center gap-1 mt-0.5"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full bg-[var(--bg-secondary)] border text-[var(--text-primary)] px-4 py-2.5 rounded-[var(--radius-btn)] text-base min-h-11 transition-all duration-200 placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]",
          error
            ? "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]"
            : "border-[var(--border)] hover:border-[var(--border-hover)]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          "w-full bg-[var(--bg-secondary)] border text-[var(--text-primary)] px-4 py-2.5 rounded-[var(--radius-btn)] text-base min-h-11 transition-all duration-200 placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] resize-y",
          error
            ? "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]"
            : "border-[var(--border)] hover:border-[var(--border-hover)]",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options?: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={clsx(
            "w-full appearance-none bg-[var(--bg-secondary)] border text-[var(--text-primary)] px-4 py-2.5 pr-10 rounded-[var(--radius-btn)] text-base min-h-11 transition-all duration-200 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] cursor-pointer",
            error
              ? "border-[var(--error)]"
              : "border-[var(--border)] hover:border-[var(--border-hover)]",
            className
          )}
          {...props}
        >
          {options
            ? options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                >
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--text-muted)]">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";
