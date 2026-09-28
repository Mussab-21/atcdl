"use client";

import React from "react";
import { clsx } from "clsx";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";

export interface ToastProps {
  id?: string;
  type?: "success" | "warning" | "error" | "info";
  title: string;
  message?: string;
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  type = "info",
  title,
  message,
  onClose,
  className,
}) => {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-[var(--warning)] shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-[var(--error)] shrink-0" />,
    info: <Info className="w-5 h-5 text-[var(--accent)] shrink-0" />,
  };

  const borders = {
    success: "border-[rgba(53,201,139,0.3)]",
    warning: "border-[rgba(243,184,75,0.3)]",
    error: "border-[rgba(255,98,98,0.3)]",
    info: "border-[rgba(77,141,255,0.3)]",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        "flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border shadow-xl shadow-black/50 text-sm max-w-md w-full animate-in slide-in-from-top-2 duration-200",
        borders[type],
        className
      )}
    >
      {icons[type]}
      <div className="flex-1">
        <h4 className="font-medium text-[var(--text-primary)]">{title}</h4>
        {message && (
          <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
            {message}
          </p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss toast"
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-0.5 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
