import type { MetadataRoute } from "next";

import { ROUTES } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ en, de }) => [
    {
      url: `https://jkel.io${en === "/" ? "" : en}`,
      changeFrequency: "monthly" as const,
      priority: en === "/" ? 1 : 0.8,
      alternates: { languages: { de: `https://jkel.io${de}` } },
    },
    {
      url: `https://jkel.io${de}`,
      changeFrequency: "monthly" as const,
      priority: de === "/de" ? 0.9 : 0.7,
      alternates: { languages: { en: `https://jkel.io${en === "/" ? "" : en}` } },
    },
  ]);
}
