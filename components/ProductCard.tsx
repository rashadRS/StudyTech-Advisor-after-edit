"use client";

import { Product } from "@/data/config";
import { useApp } from "@/context/AppContext";

export function ProductCard({ product, onSave }: { product: Product; onSave?: (p: Product) => void }) {
  const { t } = useApp();

  return (
    <article className="glass rounded-2xl p-4">
      <div className="mb-2 text-sm text-brand-500">{product.brand}</div>
      <h3 className="text-lg font-semibold">{product.model}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{product.cpu} • {product.ram}GB • {product.storage} • {product.gpu}</p>
      <p className="mt-1 text-sm">RM {product.price.toLocaleString()}</p>
      <div className="mt-4 flex gap-2">
        <a href={product.buyLink} target="_blank" className="rounded-xl bg-brand-500 px-3 py-2 text-sm text-white">{t.common.viewProduct}</a>
        {onSave ? <button onClick={() => onSave(product)} className="rounded-xl border px-3 py-2 text-sm">{t.common.save}</button> : null}
      </div>
    </article>
  );
}
