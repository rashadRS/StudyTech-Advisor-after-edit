"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { Product } from "@/data/config";

export default function DashboardPage() {
  const { t } = useApp();
  const [userName, setUserName] = useState("");
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserName(user.name || user.email || "Student");
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold">{t.dashboard.title} {userName}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{t.dashboard.subtitle}</p>
      <ul className="mt-6 space-y-2">
        {favorites.map((item) => <li key={item.id} className="glass rounded-xl p-3">{item.brand} {item.model}</li>)}
      </ul>
    </section>
  );
}
