import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tedxiemsaltlake.com"),
  title: {
    default: "TEDx IEM Salt Lake | Loneliness in the Era of AI",
    template: "%s | TEDx IEM Salt Lake",
  },
  description: "Join TEDx IEM Salt Lake 2026. Theme: Loneliness in the era of AI. Independent TEDx event featuring brilliant speakers, ideas, and innovation at IEM Kolkata.",
  keywords: ["TEDx", "IEM Salt Lake", "IEM Kolkata", "TEDxIEM", "Loneliness in AI", "AI", "Technology", "Events Kolkata", "TEDx Kolkata"],
  authors: [{ name: "TEDx IEM Salt Lake Team" }],
  creator: "TEDx IEM Salt Lake",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "TEDx IEM Salt Lake",
    description: "Independent TEDx event at IEM Salt Lake. Theme: Loneliness in the era of AI.",
    siteName: "TEDx IEM Salt Lake",
    images: [
      {
        url: "/herobg.png", // Fallback to hero image, ideally a dedicated OG image
        width: 1200,
        height: 630,
        alt: "TEDx IEM Salt Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDx IEM Salt Lake",
    description: "Independent TEDx event at IEM Salt Lake. Theme: Loneliness in the era of AI.",
    images: ["/herobg.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
