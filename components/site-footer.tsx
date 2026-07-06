import Link from "next/link";

import { SITE } from "@/lib/site";
import { NAV_ROUTES, type Locale } from "@/lib/i18n";

// Recessed footer well (DESIGN.md §4) with the brand's closing status line.
const SiteFooter = ({ locale }: { locale: Locale }) => (
  <footer className="dot-grid border-t border-haarlinie bg-tinte-tief">
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-24">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <Link
          href={locale === "de" ? "/de" : "/"}
          className="text-lg text-papier"
        >
          Leon <span className="font-display italic text-messing">Jäkel</span>
        </Link>
        <nav aria-label={locale === "de" ? "Fußzeile" : "Footer"}>
          <ul className="flex flex-wrap gap-6">
            {NAV_ROUTES.map((route) => (
              <li key={route[locale]}>
                <Link
                  href={route[locale]}
                  className="font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft transition-colors hover:text-papier"
                >
                  {route.label[locale]}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-utility text-[13px] uppercase tracking-[0.08em] text-messing transition-colors hover:text-papier"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft transition-colors hover:text-papier"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="inline-flex items-center gap-3 font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
        <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
        STATUS 200 · CONNECTED — AUGSBURG, DE
      </p>
    </div>
  </footer>
);

export default SiteFooter;
