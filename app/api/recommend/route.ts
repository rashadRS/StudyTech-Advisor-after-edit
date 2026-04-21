import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/config";

export async function POST(req: NextRequest) {
  const answers = await req.json();

  const scored = products.map((product) => {
    let score = 45;
    if (answers.major?.includes("حاسوب") || answers.major?.includes("Computer")) score += product.ram >= 16 ? 20 : 10;
    if (answers.major?.includes("تصميم") || answers.major?.includes("Design")) score += product.gpu.includes("RTX") ? 20 : 10;
    if (answers.major?.includes("Business") || answers.major?.includes("إدارة")) score += product.battery;
    if (answers.budget?.includes("Below") || answers.budget?.includes("أقل")) score += product.price < 4000 ? 15 : 0;
    if (answers.budget?.includes("Above") || answers.budget?.includes("أكثر")) score += product.price > 5500 ? 10 : 0;
    if (answers.portability?.includes("High") || answers.portability?.includes("عالية")) score += product.portability;
    if (answers.os === "macOS") score += product.brand === "Apple" ? 20 : 0;
    const reason = `Optimized for ${answers.major || "student"} with ${product.cpu}, ${product.ram}GB RAM, and balanced battery life.`;
    return { ...product, score: Math.min(score, 99), reason };
  }).sort((a, b) => b.score - a.score).slice(0, 3);

  return NextResponse.json(scored);
}
