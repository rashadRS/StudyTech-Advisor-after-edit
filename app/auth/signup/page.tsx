"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function SignUpPage() {
  const router = useRouter();
  const { t } = useApp();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    localStorage.setItem("user", JSON.stringify({ name: fd.get("name"), email: fd.get("email") }));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-3 glass rounded-2xl p-6">
      <h1 className="text-2xl font-bold">{t.auth.signup}</h1>
      <input className="input" name="name" placeholder={t.auth.name} required />
      <input className="input" name="email" placeholder={t.auth.email} required />
      <input className="input" name="password" type="password" placeholder={t.auth.password} required />
      <button className="w-full rounded-xl bg-brand-500 py-3 text-white">{t.auth.signup}</button>
    </form>
  );
}
