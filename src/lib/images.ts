import { existsSync } from "node:fs";
import { join } from "node:path";

const ESCORTS_DIR = join(process.cwd(), "public/images/escorts");
const SERVICES_DIR = join(process.cwd(), "public/images/Services");
const FALLBACK = "/images/escorts-in-mumbai-banner.webp";

export function locationImage(slug: string): string {
  const file = `escorts-in-${slug}.webp`;
  return existsSync(join(ESCORTS_DIR, file)) ? `/images/escorts/${file}` : FALLBACK;
}

export function serviceImage(slug: string): string {
  const file = `${slug}.webp`;
  return existsSync(join(SERVICES_DIR, file)) ? `/images/Services/${file}` : FALLBACK;
}
