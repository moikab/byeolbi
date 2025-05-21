import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://byeolbi.vercel.app" />
      </head>
      <body className={`${inter.className} min-h-screen starfield-bg`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
