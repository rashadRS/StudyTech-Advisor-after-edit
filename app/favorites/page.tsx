"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/data/config";
import { useApp } from "@/context/AppContext";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { t } = useApp();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  const remove = (id: string) => {
    const next = favorites.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(next));
    setFavorites(next);
  };

  return (
    <section>
      <h1 className="mb-5 text-2xl font-bold">{t.nav.favorites}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {favorites.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <button onClick={() => remove(product.id)} className="mt-2 rounded-xl border px-3 py-2 text-sm">{t.common.remove}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
