import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotzarina.in"),
  title: {
    default: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
    template: "%s | Zarina Escorts Mumbai",
  },
  description:
    "Mumbai's #1 escort service — 100% verified call girls available 24/7. VIP escorts, Russian models, independent companions across Andheri, Bandra, Juhu & Powai. Safe, discreet booking. Call +91 90389 76363.",
  authors: [{ name: "Zarina Escorts Mumbai" }],
  creator: "Zarina Escorts Mumbai",
  publisher: "Zarina Escorts Mumbai",
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
    locale: "en_IN",
    url: "https://hotzarina.in",
    siteName: "Zarina Escorts Mumbai",
    title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
    description:
      "Mumbai's #1 escort service — 100% verified call girls available 24/7. Safe, discreet booking.",
    images: [
      {
        url: "/images/escorts-in-mumbai-banner.webp",
        width: 1200,
        height: 630,
        alt: "Escorts in Mumbai – Premium Call Girls Service | Zarina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
    description:
      "Mumbai's #1 escort service — 100% verified call girls available 24/7. Safe, discreet booking.",
    images: ["/images/escorts-in-mumbai-banner.webp"],
    site: "@hotzarina",
    creator: "@hotzarina",
  },
  alternates: {
    canonical: "https://hotzarina.in",
  },
  verification: {
    google: "izcJ4rkKRnpjvolk7kqnqbFI23kMkDQQHl-ZC6Wf6VU",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={poppins.variable}>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
