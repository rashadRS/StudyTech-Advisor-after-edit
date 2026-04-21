"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";

const keys = ["major", "budget", "usage", "os", "portability"] as const;

export default function QuizPage() {
  const { t, playSound } = useApp();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const key = keys[step];
  const options = [...t.quiz.options[key], t.quiz.other];

  const setAnswer = (value: string) => {
    playSound("select");
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const finish = async () => {
    playSound("finish");
    localStorage.setItem("quiz", JSON.stringify(answers));
    const res = await fetch("/api/recommend", { method: "POST", body: JSON.stringify(answers) });
    const data = await res.json();
    localStorage.setItem("results", JSON.stringify(data));
    router.push("/results");
  };

  return (
    <section className="mx-auto max-w-2xl glass rounded-2xl p-6">
      <h1 className="text-2xl font-bold">{t.quiz.title}</h1>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full bg-brand-500 transition-all" style={{ width: `${((step + 1) / keys.length) * 100}%` }} /></div>
      <h2 className="mt-6 text-xl">{t.quiz.questions[key]}</h2>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <button key={option} onClick={() => setAnswer(option)} className={`rounded-xl border p-3 text-start ${answers[key] === option ? "border-brand-500 bg-brand-500/10" : ""}`}>{option}</button>
        ))}
        {answers[key] === t.quiz.other ? <input className="input" onChange={(e) => setAnswer(e.target.value)} placeholder={t.quiz.other} /> : null}
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} className="rounded-xl border px-4 py-2">{t.quiz.back}</button>
        {step < keys.length - 1 ? <button onClick={() => step === 0 ? (playSound("start"), setStep(step + 1)) : setStep(step + 1)} className="rounded-xl bg-brand-500 px-4 py-2 text-white">{t.quiz.next}</button> : <button onClick={finish} className="rounded-xl bg-brand-500 px-4 py-2 text-white">{t.quiz.finish}</button>}
      </div>
    </section>
  );
}
