"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { Product } from "@/data/config";

type Ranked = Product & { score: number; reason: string };

export default function ResultsPage() {
  const { t } = useApp();
  const [results, setResults] = useState<Ranked[]>([]);

  useEffect(() => {
    setResults(JSON.parse(localStorage.getItem("results") || "[]"));
  }, []);

  const onSave = (item: Product) => {
    const current = JSON.parse(localStorage.getItem("favorites") || "[]");
    const next = current.find((p: Product) => p.id === item.id) ? current : [...current, item];
    localStorage.setItem("favorites", JSON.stringify(next));
  };

  return (
    <section>
      <h1 className="text-3xl font-bold">{t.results.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{t.common.topMatches}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {results.map((item, i) => (
          <article key={item.id} className="glass rounded-2xl p-5">
            <p className="text-sm">#{i + 1} • {Math.round(item.score)}%</p>
            <h2 className="mt-2 text-lg font-semibold">{item.brand} {item.model}</h2>
            <p className="mt-2 text-sm">{t.results.reason}: {item.reason}</p>
            <div className="mt-4 flex gap-2">
              <a className="rounded-xl bg-brand-500 px-3 py-2 text-sm text-white" href={item.buyLink} target="_blank">{t.common.viewProduct}</a>
              <button className="rounded-xl border px-3 py-2 text-sm" onClick={() => onSave(item)}>{t.common.save}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
