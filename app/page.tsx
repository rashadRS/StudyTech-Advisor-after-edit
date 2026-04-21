"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/Logo";

export default function HomePage() {
  const { t } = useApp();

  return (
    <section className="mx-auto max-w-3xl py-20 text-center">
      <div className="mx-auto mb-8 w-fit"><Logo /></div>
      <h1 className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">{t.hero.title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{t.hero.subtitle}</p>
      <div className="mt-9 flex justify-center gap-3">
        <Link href="/quiz" className="rounded-xl bg-brand-500 px-5 py-3 text-white">{t.hero.start}</Link>
        <Link href="/learn" className="rounded-xl border px-5 py-3">{t.hero.learn}</Link>
      </div>
    </section>
  );
}
