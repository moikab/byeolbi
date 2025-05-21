import { Metadata } from "next";

const title = "별비 (Byeolbi) - Personalized Astrological Predictions";
const description =
  "Discover your cosmic destiny through personalized predictions based on your birthdate and astrological signs. Explore historical prophecies and their connections to your fate.";

export const siteConfig = {
  name: "별비 (Byeolbi)",
  description,
  url: "https://byeolbi.vercel.app", // Replace with your actual domain
  ogImage: "/og-image.jpg", // We'll create this later
  links: {
    twitter: "https://twitter.com/byeolbi", // Replace with your social media
    github: "https://github.com/yourusername/byeolbi", // Replace with your repository
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "astrological predictions",
    "zodiac signs",
    "horoscope",
    "birth date analysis",
    "cosmic destiny",
    "prophecy",
    "fortune telling",
    "별비",
    "byeolbi",
    "astrology",
    "korean astrology",
  ],
  authors: [
    {
      name: "별비 Team",
      url: siteConfig.url,
    },
  ],
  creator: "별비 Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: siteConfig.url,
    title: title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
    creator: "@byeolbi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}; 