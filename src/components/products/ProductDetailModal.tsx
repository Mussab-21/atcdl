"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { LabProduct } from "@/content/products-lab-data";
export function ProductDetailModal({
  product,
  onClose,
}: {
  product: LabProduct | null;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      title={product?.name}
      description={product?.tagline}
    >
      {product && (
        <div className="space-y-6">
          <p className="text-xs font-semibold text-[var(--accent-ai)]">
            {product.status} · Capabilities and integrations are subject to
            evaluation.
          </p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            {product.problem}
          </p>
          <section>
            <h3 className="font-semibold mb-3">How it works</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
              {product.howItWorks.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Who it’s for</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {product.targetUsers}
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">
              Integration options to discuss
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.integrations.map((s) => (
                <span
                  key={s}
                  className="text-xs p-2 rounded bg-[var(--bg-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
          <div className="flex gap-4 flex-wrap border-t border-[var(--border)] pt-5">
            <Link
              className="studio-button"
              href={`/contact?product=${product.slug}&intent=demo`}
            >
              Discuss this product <ArrowUpRight size={16} />
            </Link>
            <Link className="text-link" href={`/products/${product.slug}`}>
              Full product details <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </Modal>
  );
}
