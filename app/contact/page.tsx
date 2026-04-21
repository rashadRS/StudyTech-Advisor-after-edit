"use client";

import { advisors } from "@/data/config";
import { useApp } from "@/context/AppContext";

export default function ContactPage() {
  const { t, locale } = useApp();

  return (
    <section>
      <h1 className="text-3xl font-bold">{t.contact.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{t.contact.subtitle}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {advisors.map((advisor) => (
          <article key={advisor.whatsapp} className="glass rounded-2xl p-5">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white">{advisor.name[locale].slice(0, 1)}</div>
            <h2 className="text-lg font-semibold">{advisor.name[locale]}</h2>
            <a href={advisor.whatsapp} target="_blank" className="mt-3 inline-block rounded-xl bg-emerald-500 px-4 py-2 text-white">WhatsApp</a>
          </article>
        ))}
      </div>
    </section>
  );
}
