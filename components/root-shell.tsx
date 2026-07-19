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
      {/* Pre-paint marker for the data-reveal hidden state (D-32): must run
          before content paints, or in-view sections flicker at hydration. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add("js")`,
        }}
      />
      <ScrollReveal />
      <SiteNav />
      {children}
      <SiteFooter locale={locale} />
    </body>
  </html>
);

export default RootShell;
