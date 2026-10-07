"use client";
import React, { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { clsx } from "clsx";
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}
export function Modal({
  isOpen,
  onClose,
  title = "Details",
  description,
  children,
  className,
  maxWidth = "md",
}: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => {
    const el = dialog.current;
    if (!el || !isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    el.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [isOpen]);
  if (!isOpen || typeof document === "undefined") return null;
  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby={`${id}-title`}
      aria-describedby={description ? `${id}-description` : undefined}
      className={clsx(
        "dialog-native",
        maxWidth === "xl" && "!max-w-4xl",
        className,
      )}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <div className="flex justify-between items-start gap-4 mb-5">
        <div>
          <h2
            id={`${id}-title`}
            className="text-2xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          {description && (
            <p
              id={`${id}-description`}
              className="text-sm mt-2 text-[var(--text-secondary)]"
            >
              {description}
            </p>
          )}
        </div>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Close dialog"
          className="min-w-11 min-h-11 grid place-items-center rounded-full bg-[var(--bg-secondary)]"
        >
          <X size={20} />
        </button>
      </div>
      {children}
    </dialog>,
    document.body,
  );
}
