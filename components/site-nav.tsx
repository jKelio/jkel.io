"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { NAV_ROUTES, altPath, localeFromPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/*
 * Sticky nav. The Connect CTA is a ghost button here (D-28): the fixed header
 * is always in view, so a Messing fill would break the one-filled-element-
 * per-view ration the moment any page CTA scrolls in. Below sm the page links
 * move into a full-height Tinte Tief panel (D-26) — the one place the filled
 * primary is allowed, since nothing else is on screen with it.
 *
 * The panel is a SIBLING of the header, not a child: the header's
 * backdrop-filter makes it the containing block for fixed descendants, which
 * would collapse the panel's top/bottom coordinates into the 72px header box.
 */
const SiteNav = () => {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close on navigation (covers browser back/forward while the menu is
  // open) — the guarded adjust-during-render pattern, not an effect.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const otherLocale: Locale = locale === "en" ? "de" : "en";
  const close = () => setOpen(false);

  const languageToggle = (className: string) => (
    <Link
      href={altPath(pathname, otherLocale)}
      hrefLang={otherLocale}
      onClick={close}
      className={cn(
        "font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft transition-colors hover:text-papier",
        className,
      )}
      aria-label={
        otherLocale === "de" ? "Zur deutschen Version" : "Switch to English"
      }
    >
      <span className="text-papier">{locale.toUpperCase()}</span>
      {" / "}
      {otherLocale.toUpperCase()}
    </Link>
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-tinte/80 backdrop-blur-sm transition-colors",
          scrolled || open ? "border-haarlinie" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-6">
          <Link
            href={locale === "de" ? "/de" : "/"}
            onClick={close}
            className="text-lg text-papier"
          >
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

            {languageToggle("hidden sm:inline")}

            <Button
              size="sm"
              variant="outline"
              asChild
              className="hidden sm:inline-flex"
            >
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                {locale === "de" ? "Vernetzen ↗" : "Connect ↗"}
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="font-utility text-[13px] uppercase tracking-[0.08em] text-papier transition-colors hover:text-messing sm:hidden"
            >
              {open
                ? locale === "de"
                  ? "Schließen"
                  : "Close"
                : locale === "de"
                  ? "Menü"
                  : "Menu"}
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="dot-grid fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-tinte-tief sm:hidden"
        >
          <nav
            aria-label={locale === "de" ? "Mobile Navigation" : "Mobile"}
            className="mx-auto flex min-h-full w-full max-w-[1200px] flex-col justify-between px-6 py-8"
          >
            <ul className="flex flex-col">
              {NAV_ROUTES.map((route) => {
                const href = route[locale];
                const active = pathname === href;
                return (
                  <li key={href} className="border-b border-haarlinie">
                    <Link
                      href={href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 py-5 font-utility text-[15px] uppercase tracking-[0.08em] transition-colors",
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

            <div className="flex flex-col items-start gap-8 pt-10 pb-4">
              {languageToggle("")}
              <Button asChild className="w-full">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {locale === "de"
                    ? "Auf LinkedIn vernetzen ↗"
                    : "Connect on LinkedIn ↗"}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default SiteNav;
