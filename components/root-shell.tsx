import "@/app/globals.css";

import ScrollReveal from "@/components/scroll-reveal";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { newsreader, plexSans, plexMono } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

// Shared <html>/<body> shell for both locale root layouts.
const RootShell = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => (
  <html
    lang={locale}
    className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col">
      <ScrollReveal />
      <SiteNav />
      {children}
      <SiteFooter locale={locale} />
    </body>
  </html>
);

export default RootShell;
