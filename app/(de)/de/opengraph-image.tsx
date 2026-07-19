import { OG_ALT, OG_SIZE, brandCard } from "@/lib/og";

// Same Ink & Brass card for the German routes (D-25) — the subline is
// English proper nouns either way.
export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandCard();
}
