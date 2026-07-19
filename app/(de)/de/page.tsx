import Link from "next/link";

import Eyebrow from "@/components/eyebrow";
import HeroVideo from "@/components/hero-video";
import SocialIcons from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const STACK: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Angular", "TypeScript", "Vue.js", "React"] },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Node.js / NestJS", "Python (FastAPI)"],
  },
  {
    group: "KI & Agentik",
    items: ["Claude Code", "MCP", "Spec-Driven Development"],
  },
  {
    group: "Plattform",
    items: ["Docker", "Kubernetes", "AWS", "Azure", "Helm"],
  },
  {
    group: "Daten",
    items: ["PostgreSQL", "MongoDB", "Oracle DB", "Redis", "Kafka"],
  },
  {
    group: "Arbeitsweise",
    items: ["Clean Code", "SOLID", "TDD", "Scrum / Kanban"],
  },
];

const AI_STACK_ITEMS = new Set([
  "Claude Code",
  "MCP",
  "Spec-Driven Development",
]);

// Copy: COPY.de.md Seite 1. Skin: DESIGN.md.
export default function HomeDe() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroVideo locale="de" />
        <div className="mx-auto flex min-h-dvh w-full max-w-[1200px] flex-col justify-center gap-8 px-6 py-32">
          <p className="inline-flex w-fit items-center gap-3 rounded-full border border-haarlinie bg-tinte-tief px-4 py-1.5 font-utility text-[13px] tracking-[0.08em] text-papier-gedaempft">
            <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
            HTTP/1.1 200 OK — AUGSBURG, DE
          </p>

          <h1 className="max-w-6xl font-display italic text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-papier">
            Agentic Engineering, in Produktion.
          </h1>

          <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
            Ich bin Senior Software Engineer bei adesso SE in Augsburg und
            verbringe meine Tage mit etwas, worüber die meisten Teams noch
            reden:{" "}
            <span className="text-papier">
              agentische Engineering-Workflows – Claude Code,
              MCP-Integrationen, Spec-Driven Development – in einer
              produktiven Enterprise-Umgebung
            </span>{" "}
            bei der Allianz.
          </p>

          <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
            Das ist kein Nebenprojekt. Es baut auf zehn Jahren
            Full-Stack-Engineering für Namen, die man kennt:{" "}
            <span className="text-papier">
              Allianz, Infineon, Swiss Life, SAP
            </span>
            . Angular und TypeScript vorne, Java und Spring Boot dahinter,
            Kubernetes und AWS darunter.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Button asChild>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Auf LinkedIn vernetzen ↗
              </a>
            </Button>
            <SocialIcons linkedin={false} />
          </div>
        </div>
      </section>

      {/* Was ich tue */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <div data-reveal>
          <Eyebrow>Was ich tue</Eyebrow>
        </div>
        <div className="flex flex-col gap-20">
          <div data-reveal className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
              Agentic Engineering für echte Workloads.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
              Als Unit Multiplicator for AI Development in der Insurance-Line
              von adesso bringe ich KI-gestütztes Engineering dorthin, wo es
              Code-Reviews, Compliance und Release-Zyklen überstehen muss,
              nicht nur Demos. Aktuell: Spec-Driven Development mit Claude
              Code auf der globalen Vertriebsplattform der Allianz.
            </p>
          </div>
          <div data-reveal className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier md:order-2">
              Senior Full-Stack Delivery.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft md:order-1">
              Microfrontends, Framework-Upgrades (Angular 17 bis 22),
              wiederverwendbare Komponentenbibliotheken, eventgetriebene
              Backends mit Kafka und Camunda. Ich habe Frontends
              verantwortet, die weltweit in der Allianz Gruppe im Einsatz
              sind, und Systeme modernisiert, die ihr Leben in Oracle Forms
              begonnen haben.
            </p>
          </div>
          <div data-reveal className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
              Andere Engineers besser machen.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
              Technisches Mentoring, Pair Programming, Onboarding,
              Code-Reviews. Dazu ein genAI-Hackathon in München, den ich
              organisiere, um ganze Teams auf die KI-Kurve zu bringen.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto w-full max-w-[1200px] border-haarlinie" />

      {/* Womit ich arbeite */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <div data-reveal>
          <Eyebrow>Womit ich arbeite</Eyebrow>
          <h2 className="mb-12 font-display italic text-4xl leading-[1.15] text-papier">
            Der Stack hinter der Arbeit.
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map(({ group, items }, index) => (
            <div
              key={group}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <h3 className="mb-4 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
                {group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border border-haarlinie px-3 py-1 font-utility text-xs ${
                      AI_STACK_ITEMS.has(item)
                        ? "text-messing"
                        : "text-papier-gedaempft"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="mx-auto w-full max-w-[1200px] border-haarlinie" />

      {/* Die Belege — ein Wert trägt das Messing (D-29) */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <div data-reveal>
          <Eyebrow as="h2">Die Belege</Eyebrow>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div data-reveal>
            <p className="font-display italic text-6xl text-messing">10+</p>
            <p className="mt-3 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
              Jahre Enterprise-Projekte
            </p>
          </div>
          <ul
            data-reveal
            style={{ transitionDelay: "100ms" }}
            className="max-w-[65ch] space-y-4 text-lg leading-[1.6] text-papier-gedaempft"
          >
            <li>
              iSAQB® Certified Professional for Software Architecture (CPSA-F)
            </li>
            <li>
              Anthropic Claude Certified Architect Foundations (CCA-F):
              ausgewählt aus{" "}
              <span className="text-messing">über 650 Bewerbern</span>, in
              Arbeit
            </li>
            <li>2. Platz &amp; Community-Preis, iHack.Ruhr 2018</li>
          </ul>
        </div>
        <div
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="mt-16 flex flex-wrap items-center gap-6"
        >
          <Button asChild>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              Auf LinkedIn vernetzen ↗
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/de/projekte">Meine Arbeit ansehen →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
