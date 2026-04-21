import Link from "next/link";

export function WhatsappFloating() {
  return (
    <Link
      href="https://wa.me/601114326187"
      target="_blank"
      className="fixed bottom-5 left-5 z-40 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
    >
      WhatsApp
    </Link>
  );
}
