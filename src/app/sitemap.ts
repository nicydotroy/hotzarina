import type { MetadataRoute } from "next";
import { locations, services } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://hotzarina.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const main: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/location`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/${s.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const locationUrls: MetadataRoute.Sitemap = locations.flatMap((loc) => [
    {
      url: `${BASE}/escorts-in-${loc.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE}/spa-center-in-${loc.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE}/male-escorts-in-${loc.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ]);

  return [...main, ...serviceUrls, ...locationUrls];
}
