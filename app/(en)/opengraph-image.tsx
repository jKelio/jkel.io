import { OG_ALT, OG_SIZE, brandCard } from "@/lib/og";

// Applies to every EN route (D-25) — LinkedIn is the site's primary funnel,
// so the share card is the first impression most visitors get.
export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandCard();
}
