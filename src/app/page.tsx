import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Hotzarina – your destination for the latest news, in-depth guides, and curated listings.",
  alternates: {
    canonical: "https://hotzarina.in",
  },
  openGraph: {
    url: "https://hotzarina.in",
    title: "Hotzarina – Latest News, Guides & Listings",
    description:
      "Welcome to Hotzarina – your destination for the latest news, in-depth guides, and curated listings.",
  },
};

const categories = [
  {
    title: "News",
    description: "Stay updated with the latest stories and breaking headlines.",
    href: "/news",
    icon: "📰",
  },
  {
    title: "Guides",
    description: "In-depth guides to help you learn and explore new topics.",
    href: "/guides",
    icon: "📖",
  },
  {
    title: "Listings",
    description: "Browse curated listings across top categories.",
    href: "/listings",
    icon: "📋",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-white dark:from-zinc-900 dark:to-zinc-950 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Welcome to <span className="text-rose-600">Hotzarina</span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Your destination for the latest news, in-depth guides, and curated listings.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/news"
            className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Explore News
          </Link>
          <Link
            href="/guides"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Browse Guides
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8 text-center">
          What&apos;s on Hotzarina
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-md transition-all"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-rose-600 transition-colors">
                {cat.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
