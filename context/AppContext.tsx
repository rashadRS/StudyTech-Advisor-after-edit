"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "@/data/i18n";
import { soundConfig } from "@/data/config";

export type Locale = keyof typeof dictionary;
type Theme = "light" | "dark";

type AppState = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: typeof dictionary.ar;
  theme: Theme;
  muted: boolean;
  toggleLocale: () => void;
  toggleTheme: () => void;
  toggleMute: () => void;
  playSound: (type: keyof typeof soundConfig) => void;
};

const AppCtx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null;
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const storedMuted = localStorage.getItem("muted");
    if (storedLocale) setLocale(storedLocale);
    if (storedTheme) setTheme(storedTheme);
    if (storedMuted) setMuted(storedMuted === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("muted", String(muted));
  }, [muted]);

  const playSound = (type: keyof typeof soundConfig) => {
    if (muted || typeof window === "undefined") return;
    const settings = soundConfig[type];
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    try {
      const context = new AudioCtx();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = settings.frequency;
      gain.gain.value = 0.0001;
      oscillator.connect(gain);
      gain.connect(context.destination);
      const now = context.currentTime;
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + settings.duration);
      oscillator.start(now);
      oscillator.stop(now + settings.duration);
      oscillator.onended = () => {
        void context.close();
      };
    } catch {
      // Intentionally silent: browser policies may block audio until user interaction.
    }
  };

  const value = useMemo(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: dictionary[locale],
      theme,
      muted,
      toggleLocale: () => setLocale((v) => (v === "ar" ? "en" : "ar")),
      toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")),
      toggleMute: () => setMuted((v) => !v),
      playSound
    }),
    [locale, theme, muted]
  );

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export const useApp = () => {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
