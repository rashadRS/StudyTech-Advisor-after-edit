import "./globals.css";
import type { Metadata } from "next";
import { AppProvider } from "@/context/AppContext";
import { Navbar } from "@/components/Navbar";
import { WhatsappFloating } from "@/components/WhatsappFloating";

export const metadata: Metadata = {
  title: "StudyTech Advisor",
  description: "Bilingual premium laptop advisor for Malaysian university students"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <AppProvider>
          <Navbar />
          <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">{children}</main>
          <WhatsappFloating />
        </AppProvider>
      </body>
    </html>
  );
}
