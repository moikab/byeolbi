import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "별비 - 당신의 운명을 비추는 빛",
  description: "별들이 전하는 당신만의 예언을 확인하세요.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link rel="canonical" href="https://byeolbi.vercel.app" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-starfield relative overflow-hidden">
          {/* Animated stars */}
          <div className="absolute inset-0 z-0">
            <div className="stars-small" />
            <div className="stars-medium" />
            <div className="stars-large" />
          </div>
          
          {/* Cosmic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-indigo-950/40 z-0" />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
