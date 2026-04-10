import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotzarina.in"),
  title: {
    default: "Hotzarina – Latest News, Guides & Listings",
    template: "%s | Hotzarina",
  },
  description:
    "Hotzarina brings you the latest news, in-depth guides, and curated listings across top categories.",
  keywords: ["hotzarina", "news", "guides", "listings"],
  authors: [{ name: "Hotzarina" }],
  creator: "Hotzarina",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hotzarina.in",
    siteName: "Hotzarina",
    title: "Hotzarina – Latest News, Guides & Listings",
    description:
      "Hotzarina brings you the latest news, in-depth guides, and curated listings across top categories.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hotzarina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotzarina – Latest News, Guides & Listings",
    description:
      "Hotzarina brings you the latest news, in-depth guides, and curated listings across top categories.",
    images: ["/og-image.png"],
    site: "@hotzarina",
    creator: "@hotzarina",
  },
  alternates: {
    canonical: "https://hotzarina.in",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
