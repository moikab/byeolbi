import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "별비 (Byeolbi) - Personalized Astrological Predictions",
  description: "Discover your cosmic destiny through personalized predictions based on your birthdate and astrological signs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen starfield-bg`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
