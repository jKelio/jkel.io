import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import ObfuscatedEmail from "@/components/obfuscated-email";
import SocialIcons from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt — Leon Jäkel am schnellsten über LinkedIn erreichen",
  description:
    "Kontakt zu Leon Jäkel — Senior Software Engineer und AI Multiplicator in Augsburg. Auf LinkedIn vernetzen für Austausch zu Agentic Engineering, Vorträge und Claude-Code-Workshops, Recruiting oder Mentoring.",
  alternates: {
    canonical: "/de/kontakt",
    languages: { en: "/contact" },
  },
};

const INVITES: { title: string; body: string }[] = [
  {
    title: "Austausch zu Agentic Engineering.",
    body: "Du bringst Claude Code, MCP oder Spec-Driven Development in ein Enterprise-Umfeld und willst Erfahrungen vergleichen — meine Lieblingsnachricht.",
  },
  {
    title: "Vorträge & Workshops.",
    body: "Meetups, Hackathons oder interne Enablement-Sessions zu KI-gestütztem Engineering — als AI-Speaker in Augsburg; München und remote gehen genauso.",
  },
  {
    title: "Recruiting-Gespräche.",
    body: "Ich suche nicht aktiv, aber ich lese jede durchdachte Nachricht.",
  },
  {
    title: "Mentoring.",
    body: "Studierende und Junior-Entwickler mit echten Fragen: fragt. Ich habe in jedem Projekt Entwickler onboardet und begleitet — und mache das gern.",
  },
];

export default function KontaktPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <p className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-haarlinie bg-tinte-tief px-4 py-1.5 font-utility text-[13px] tracking-[0.08em] text-papier-gedaempft">
        <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
        STATUS 200 · OFFEN FÜR AUSTAUSCH
      </p>

      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Kontakt — über LinkedIn geht&apos;s am schnellsten
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Am besten erreichst du mich über{" "}
        <span className="text-papier">LinkedIn</span> —
        Vernetzungsanfragen und Nachrichten lese ich dort täglich.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Auf LinkedIn vernetzen ↗
          </a>
        </Button>
        <SocialIcons />
      </div>

      <p className="mt-8 leading-[1.6] text-papier-gedaempft">
        Lieber per E-Mail? <ObfuscatedEmail />
      </p>

      <section data-reveal className="mt-24">
        <Eyebrow>Worüber ich mich freue</Eyebrow>
        <div className="grid gap-10 md:grid-cols-2">
          {INVITES.map(({ title, body }) => (
            <div key={title} className="max-w-[55ch]">
              <h2 className="text-xl font-medium text-papier">{title}</h2>
              <p className="mt-2 leading-[1.6] text-papier-gedaempft">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-24 font-utility text-sm text-papier-gedaempft">
        Zuhause in Augsburg, Bayern — unterwegs mit Teams in ganz
        Deutschland und international.
      </p>
    </main>
  );
}
