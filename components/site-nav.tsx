"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { NAV_ROUTES, altPath, localeFromPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SiteNav = () => {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale: Locale = locale === "en" ? "de" : "en";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-tinte/80 backdrop-blur-sm transition-colors",
        scrolled ? "border-haarlinie" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-6">
        <Link href={locale === "de" ? "/de" : "/"} className="text-lg text-papier">
          Leon <span className="font-display italic text-messing">Jäkel</span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="Main">
          <ul className="hidden items-center gap-6 sm:flex">
            {NAV_ROUTES.map((route) => {
              const href = route[locale];
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center gap-2 font-utility text-[13px] uppercase tracking-[0.08em] transition-colors",
                      active
                        ? "text-papier"
                        : "text-papier-gedaempft hover:text-papier",
                    )}
                  >
                    {active && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-messing"
                        aria-hidden
                      />
                    )}
                    {route.label[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Language toggle */}
          <Link
            href={altPath(pathname, otherLocale)}
            hrefLang={otherLocale}
            className="font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft transition-colors hover:text-papier"
            aria-label={
              otherLocale === "de" ? "Zur deutschen Version" : "Switch to English"
            }
          >
            <span className="text-papier">{locale.toUpperCase()}</span>
            {" / "}
            {otherLocale.toUpperCase()}
          </Link>

          <Button size="sm" asChild>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              {locale === "de" ? "Vernetzen ↗" : "Connect ↗"}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
