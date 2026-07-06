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
    group: "AI & Agentic",
    items: ["Claude Code", "MCP", "Spec-Driven Development"],
  },
  {
    group: "Platform",
    items: ["Docker", "Kubernetes", "AWS", "Azure", "Helm"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "Oracle DB", "Redis", "Kafka"],
  },
  { group: "How", items: ["Clean Code", "SOLID", "TDD", "Scrum / Kanban"] },
];

const AI_STACK_ITEMS = new Set([
  "Claude Code",
  "MCP",
  "Spec-Driven Development",
]);

// Copy: COPY.md Page 1 (Home). Skin: DESIGN.md.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroVideo />
        <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col justify-center gap-8 px-6 py-32">
          <p className="inline-flex w-fit items-center gap-3 rounded-full border border-haarlinie bg-tinte-tief px-4 py-1.5 font-utility text-[13px] tracking-[0.08em] text-papier-gedaempft">
            <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
            HTTP/1.1 200 OK — AUGSBURG, DE
          </p>

          <h1 className="max-w-6xl font-display italic text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-papier">
            Leon Jäkel — Agentic Engineering, Shipped to Production
          </h1>

          <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
            I&apos;m a Senior Software Engineer at adesso SE in Augsburg, and I
            spend my days doing something most teams are still only talking
            about: running{" "}
            <span className="text-papier">
              agentic engineering workflows — Claude Code, MCP integrations,
              Spec-Driven Development — inside a live enterprise production
              environment
            </span>{" "}
            at Allianz.
          </p>

          <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
            That&apos;s not a side experiment. It sits on top of ten years of
            full-stack engineering for names you know:{" "}
            <span className="text-papier">
              Allianz, Infineon, Swiss Life, SAP
            </span>{" "}
            — Angular and TypeScript up front, Java and Spring Boot behind,
            Kubernetes and AWS underneath.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <Button asChild>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me on LinkedIn ↗
              </a>
            </Button>
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* What I do — zigzag rows */}
      <section data-reveal className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <Eyebrow>What I do</Eyebrow>
        <div className="flex flex-col gap-20">
          <div className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
              Agentic engineering, for real workloads.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
              As adesso&apos;s Unit Multiplicator for AI Development in the
              Insurance line, I introduce AI-assisted engineering where it has
              to survive code review, compliance, and release trains — not
              just demos. Currently: Spec-Driven Development with Claude Code
              on Allianz&apos;s global sales platform.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier md:order-2">
              Senior full-stack delivery.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft md:order-1">
              Microfrontends, framework upgrades (Angular 17 through 22),
              reusable component libraries, event-driven backends with Kafka
              and Camunda. I&apos;ve led frontends used across the Allianz
              Group worldwide and modernized systems that started life in
              Oracle Forms.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
              Making other engineers better.
            </h2>
            <p className="max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
              Technical mentoring, pair programming, onboarding, code reviews
              — and a genAI hackathon in Munich I&apos;m organizing to pull
              whole teams up the AI curve.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto w-full max-w-[1200px] border-haarlinie" />

      {/* Tech I reach for */}
      <section data-reveal className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <Eyebrow>Tech I reach for</Eyebrow>
        <h2 className="mb-12 font-display italic text-4xl leading-[1.15] text-papier">
          The stack behind the work.
        </h2>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map(({ group, items }) => (
            <div key={group}>
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

      {/* Where the proof is — stat counters */}
      <section data-reveal className="mx-auto w-full max-w-[1200px] px-6 py-32">
        <Eyebrow>Where the proof is</Eyebrow>
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display italic text-6xl text-messing">10+</p>
            <p className="mt-3 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
              Years of enterprise projects
            </p>
          </div>
          <div>
            <p className="font-display italic text-6xl text-messing">650+</p>
            <p className="mt-3 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
              Applicants — selected for Anthropic CCA-F
            </p>
          </div>
          <div>
            <p className="font-display italic text-6xl text-messing">2nd</p>
            <p className="mt-3 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
              Place &amp; Community Prize, iHack.Ruhr 2018
            </p>
          </div>
        </div>
        <ul className="mt-16 max-w-[65ch] space-y-3 text-lg leading-[1.6] text-papier-gedaempft">
          <li>
            iSAQB® Certified Professional for Software Architecture (CPSA-F)
          </li>
          <li>
            Anthropic Claude Certified Architect Foundations — in progress
          </li>
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <Button asChild>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn ↗
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">See my work →</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
