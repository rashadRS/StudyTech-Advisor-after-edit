"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useApp } from "@/context/AppContext";

export function Navbar() {
  const { t, toggleLocale, toggleTheme, toggleMute, muted } = useApp();
  const links = [
    ["/", t.nav.home],
    ["/learn", t.nav.learn],
    ["/quiz", t.nav.quiz],
    ["/devices", t.nav.devices],
    ["/favorites", t.nav.favorites],
    ["/contact", t.nav.contact]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/"><Logo /></Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          {links.map(([href, label]) => <Link key={href} href={href} className="hover:text-brand-500">{label}</Link>)}
          <Link href="/auth/signin" className="rounded-lg border px-3 py-1.5">{t.nav.signin}</Link>
          <Link href="/auth/signup" className="rounded-lg bg-brand-500 px-3 py-1.5 text-white">{t.nav.signup}</Link>
          <button onClick={toggleLocale} className="rounded-lg border px-2 py-1">{t.common.language}</button>
          <button onClick={toggleTheme} className="rounded-lg border px-2 py-1">◐</button>
          <button onClick={toggleMute} className="rounded-lg border px-2 py-1">{muted ? t.common.unmute : t.common.mute}</button>
        </nav>
      </div>
    </header>
  );
}
