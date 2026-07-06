import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Projects — Claude Code in Production, Angular Microfrontends & Insurance Platforms",
  description:
    "Case studies from Leon Jäkel: Spec-Driven Development with Claude Code on Allianz's global offer management platform, Angular upgrades from 17 to 22, document analysis used across the Allianz Group, and insurance software modernization.",
  alternates: {
    canonical: "/projects",
    languages: { de: "/de/projekte" },
  },
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <li className="rounded-full border border-haarlinie px-3 py-1 font-utility text-xs text-papier-gedaempft">
    {children}
  </li>
);

type BriefProject = {
  title: string;
  dates: string;
  body: string;
};

const MORE_PROJECTS: BriefProject[] = [
  {
    title: "Swiss Life Deutschland — Insurance Software Modernization",
    dates: "07/2022 – 08/2024",
    body: "Migrated debt-collection (Inkasso/Exkasso) and pension-administration applications from Oracle Forms to decoupled modern web apps. Business process analysis, full-stack development (Java, Spring Boot, Vue, TypeScript, Oracle DB, OpenAPI), code reviews, and mentoring junior developers over a two-year engagement.",
  },
  {
    title: "CAPRI, Infineon — DevOps & Frontend Engineering",
    dates: "09/2024 – 12/2024",
    body: "Cross-department platform linking market observation with product development. Sustaining engineering, an Angular 17→18 upgrade, release management on OpenShift, and code reviews. Stack: Nest.js, Angular, Prisma, TypeORM.",
  },
  {
    title: "SAP SE — Dependency-Analysis Tool",
    dates: "05/2020 – 06/2021",
    body: "Analysis of commercial and open-source dependencies against compliance rules. Java, jersey, Postgres, Apache Lucene, Kubernetes, Docker.",
  },
  {
    title: "adesso BOOKR — Workspace Booking",
    dates: "since 05/2023",
    body: "Internal tool for booking desks, phone booths, and parking in open-space offices (Angular, Java, Spring Boot). My role: technical mentoring, pair programming, QA, code reviews.",
  },
  {
    title: "Earlier (2007–2020)",
    dates: "",
    body: "Consulting across energy, telco, e-commerce, financial services, and insurance: SAP CRM/IS-U portals, chatbots (MS Bot Framework, Azure Bot Service, LUIS, QnA Maker), Web Components/Polymer UI frameworks, corporate apps for iOS/Android/web.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <Eyebrow>Projects</Eyebrow>
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Projects — Where Spec-Driven Development Meets Production
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Two case studies in depth, the rest at a glance. Every project here
        shipped to real users in regulated industries.
      </p>

      {/* Case study 1 */}
      <article data-reveal className="mt-24 rounded border border-haarlinie bg-tinte-hoch p-10">
        <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
          ALLIANZ SE · SDW TRIBE · SINCE 12/2024
        </p>
        <h2 className="mt-4 font-display italic text-3xl leading-[1.2] text-papier">
          Global Offer Management at Allianz — Claude Code in Enterprise
          Production
        </h2>
        <div className="mt-6 max-w-[70ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            <span className="text-papier">The context.</span> Allianz is
            building a new global sales platform, and offer management is one
            of its core modules: it has to be scalable, modular, and
            configurable enough to serve international country setups from one
            codebase.
          </p>
          <p>
            <span className="text-papier">My role.</span> Senior full-stack
            engineer on the SPM / Global Offer Management team — and the
            engineer pushing Spec-Driven Development with Claude Code and MCP
            integrations into the team&apos;s daily delivery. Specs become the
            contract; agents do the mechanical work; engineers review, decide,
            and ship. In a production environment with real compliance
            requirements, not a sandbox.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Microfrontend implementation for the offer management module</li>
            <li>
              Angular upgrades from version 17 through 22, keeping a live
              platform current across major releases
            </li>
            <li>Reusable UI components adopted across teams</li>
            <li>
              Cross-team architecture collaboration across country setups
            </li>
          </ul>
          <p>
            <span className="text-papier">The outcome.</span> Spec-Driven
            Development carries the module&apos;s delivery across Angular,
            Spring Boot, Camunda, BFF, and GDPR-relevant layers — without
            layer specialists. Agentic QA ahead of every pull request
            surfaces issues early, including a silent CI gap and an
            architecture flaw caught before the first line of code. The bulk
            of the AI effort goes into elaborating specs, not execution — the
            spec is the work.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "Angular",
            "Java",
            "Spring Boot",
            "Camunda",
            "Apache Kafka",
            "PostgreSQL",
            "Kubernetes",
            "AWS",
            "Claude Code",
          ].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      </article>

      {/* Case study 2 */}
      <article data-reveal className="mt-12 rounded border border-haarlinie bg-tinte-hoch p-10">
        <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
          ALLIANZ SE · 07/2021 – 10/2022
        </p>
        <h2 className="mt-4 font-display italic text-3xl leading-[1.2] text-papier">
          Automated Document Analysis — Used Across the Allianz Group
        </h2>
        <div className="mt-6 max-w-[70ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            <span className="text-papier">The context.</span> Underwriters
            across Allianz compare and evaluate large volumes of documents.
            This project built web-based applications that automate the
            analysis, evaluation, and comparison of underwriting documents —
            rolled out globally across the Allianz Group.
          </p>
          <p>
            <span className="text-papier">My role.</span> Lead Frontend
            Developer. I built the document viewer at the heart of the
            product, designed the component architecture and REST APIs with
            the backend team, and technically onboarded the developers joining
            the project.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {[
            "Vue",
            "Angular",
            "Node.js / NestJS",
            "Python (FastAPI)",
            "MongoDB",
            "Kubernetes",
            "Azure AKS",
          ].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      </article>

      {/* More projects */}
      <section className="mt-32">
        <Eyebrow>More projects</Eyebrow>
        <div className="flex flex-col gap-16">
          {MORE_PROJECTS.map(({ title, dates, body }) => (
            <article data-reveal key={title} className="max-w-[70ch]">
              {dates && (
                <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
                  {dates}
                </p>
              )}
              <h3 className="mt-2 font-display italic text-2xl text-papier">
                {title}
              </h3>
              <p className="mt-3 leading-[1.6] text-papier-gedaempft">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <hr className="my-24 border-haarlinie" />

      <section data-reveal>
        <h2 className="font-display italic text-3xl text-papier">
          Working on something in this space?
        </h2>
        <div className="mt-8">
          <Button asChild>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              Connect with me on LinkedIn ↗
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
