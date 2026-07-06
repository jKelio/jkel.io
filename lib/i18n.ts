export type Locale = "en" | "de";

// Route pairs — German slugs are localized for local search (Lebenslauf,
// Kontakt), so the EN/DE toggle needs this explicit mapping.
export const ROUTES: {
  en: string;
  de: string;
  label?: { en: string; de: string };
}[] = [
  { en: "/", de: "/de" },
  {
    en: "/experience",
    de: "/de/lebenslauf",
    label: { en: "Experience", de: "Lebenslauf" },
  },
  {
    en: "/projects",
    de: "/de/projekte",
    label: { en: "Projects", de: "Projekte" },
  },
  {
    en: "/about",
    de: "/de/ueber-mich",
    label: { en: "About", de: "Über mich" },
  },
  {
    en: "/contact",
    de: "/de/kontakt",
    label: { en: "Contact", de: "Kontakt" },
  },
];

export const NAV_ROUTES = ROUTES.filter(
  (r): r is (typeof ROUTES)[number] & Required<Pick<(typeof ROUTES)[number], "label">> =>
    Boolean(r.label),
);

/** The same page in the other locale (falls back to that locale's home). */
export function altPath(pathname: string, target: Locale): string {
  const source: Locale = target === "de" ? "en" : "de";
  const route = ROUTES.find((r) => r[source] === pathname);
  return route ? route[target] : target === "de" ? "/de" : "/";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}
