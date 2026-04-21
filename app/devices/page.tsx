"use client";

import { ProductCard } from "@/components/ProductCard";
import { products, Product } from "@/data/config";

export default function DevicesPage() {
  const onSave = (product: Product) => {
    const current = JSON.parse(localStorage.getItem("favorites") || "[]");
    const next = current.find((p: Product) => p.id === product.id) ? current : [...current, product];
    localStorage.setItem("favorites", JSON.stringify(next));
  };

  return <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} onSave={onSave} />)}</section>;
}
