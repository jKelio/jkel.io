import type { Metadata } from "next";
import Link from "next/link";

import "@/app/globals.css";

import BrassGlow from "@/components/brass-glow";
import { Button } from "@/components/ui/button";
import { newsreader, plexSans, plexMono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "404 — Page not found | Leon Jäkel",
  description: "This page does not exist. Diese Seite existiert nicht.",
};

/*
 * The brand's 404 (DESIGN.md §4 status line, D-27). global-not-found
 * bypasses all layouts — with two root layouts (en/de) there is no shared
 * one to compose from — so this renders its own full document. The locale
 * of a dead URL is unknown; the page is bilingual and links both homes.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <main className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-start justify-center gap-8 overflow-x-clip px-6 py-32">
          <BrassGlow />
          <p className="inline-flex items-center gap-3 rounded-full border border-haarlinie bg-tinte-tief px-4 py-1.5 font-utility text-[13px] tracking-[0.08em] text-papier-gedaempft">
            <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
            STATUS 404 · LOST
          </p>
          <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
            This page does not exist.
          </h1>
          <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
            Diese Seite existiert nicht. The rest of the site is doing fine —
            pick a way back:
          </p>
          <div className="mt-2 flex flex-wrap gap-6">
            <Button variant="outline" asChild>
              <Link href="/">Back to jkel.io →</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/de">Zur deutschen Startseite →</Link>
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
