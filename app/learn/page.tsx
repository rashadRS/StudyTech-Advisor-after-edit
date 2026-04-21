"use client";

import { learnTopics } from "@/data/learnTopics";
import { useApp } from "@/context/AppContext";

export default function LearnPage() {
  const { t } = useApp();

  return (
    <section>
      <h1 className="text-3xl font-bold">{t.learn.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{t.learn.subtitle}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {learnTopics.map((item) => (
          <article key={item.topic} className="glass rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{item.topic}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><strong>What:</strong> {item.what}</li>
              <li><strong>Why:</strong> {item.why}</li>
              <li><strong>Example:</strong> {item.example}</li>
              <li><strong>Mistake:</strong> {item.mistake}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
