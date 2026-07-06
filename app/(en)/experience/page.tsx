import type { Metadata } from "next";
import Link from "next/link";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience & CV — Senior Software Engineer at adesso SE",
  description:
    "The CV (Lebenslauf) of Leon Jäkel: Senior Software Engineer at adesso SE, previously sparqs solutions and Power Reply. Education, iSAQB CPSA-F and Anthropic CCA-F certifications.",
  alternates: {
    canonical: "/experience",
    languages: { de: "/de/lebenslauf" },
  },
};

type Role = {
  dates: string;
  title: string;
  company: string;
  body: React.ReactNode;
};

const ROLES: Role[] = [
  {
    dates: "Since July 2021 · Augsburg, Germany",
    title: "Senior Software Engineer",
    company: "adesso SE",
    body: (
      <>
        <p>
          Senior full-stack engineer in the Insurance Business Line and{" "}
          <span className="text-papier">
            Unit Multiplicator for AI Development
          </span>{" "}
          — the person teams call when they want AI-assisted engineering to
          actually work in their delivery process.
        </p>
        <p>
          Currently staffed at <span className="text-papier">Allianz</span> on
          the SDW tribe (Global Offer Management), driving Spec-Driven
          Development and agentic workflows with Claude Code in production.
          Previous engagements through adesso: Infineon (CAPRI), Swiss Life,
          Allianz document analysis.{" "}
          <Link
            href="/projects"
            className="text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing"
          >
            Read the case studies
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    dates: "July 2017 – June 2021",
    title: "IT-Consultant",
    company: "sparqs solutions GmbH & Co. KG",
    body: (
      <p>
        Full-stack consulting across energy, telecommunications, and
        e-commerce: SAP CRM/IS-U customer portals, chatbots on the Microsoft
        Bot Framework and Azure (LUIS, QnA Maker), UI frameworks with Web
        Components and Polymer, and a dependency-analysis platform for SAP SE.
      </p>
    ),
  },
  {
    dates: "September 2015 – June 2017",
    title: "IT-Consultant",
    company: "Power Reply GmbH & Co. KG",
    body: (
      <p>
        Consulting for enterprise clients in utilities and telco — corporate
        in-house apps for iOS, Android, and web; first years of production
        responsibility.
      </p>
    ),
  },
  {
    dates: "2007 – 2015",
    title: "Earlier",
    company: "Working student & internships",
    body: (
      <p>
        Working-student and internship roles in e-commerce and services
        (Mietservice 2000, Verlagsgruppe Weltbild, and others) while studying
        — the years where I learned that software only matters when real
        customers use it.
      </p>
    ),
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <Eyebrow>Experience</Eyebrow>
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Experience — My CV, the Readable Version
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Ten years across insurance, semiconductors, and enterprise software —
        the short story is on this page, the formal version is one click away.
      </p>

      <div className="mt-10 flex flex-wrap gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn ↗
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/cv-leon-jaekel-en.pdf" download>
            Download CV (PDF) ↓
          </a>
        </Button>
      </div>

      {/* Timeline (DESIGN.md §4) */}
      <div className="mt-24 border-l-2 border-haarlinie">
        {ROLES.map(({ dates, title, company, body }) => (
          <article data-reveal key={dates} className="relative pb-16 pl-10 last:pb-0">
            <span
              className="absolute top-2 -left-[5px] h-2 w-2 rounded-full bg-messing"
              aria-hidden
            />
            <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
              {dates}
            </p>
            <h2 className="mt-2 font-display italic text-3xl text-papier">
              {title}
            </h2>
            <p className="mt-1 text-messing">{company}</p>
            <div className="mt-4 max-w-[65ch] space-y-4 leading-[1.6] text-papier-gedaempft">
              {body}
            </div>
          </article>
        ))}
      </div>

      <hr className="my-24 border-haarlinie" />

      <section data-reveal>
        <Eyebrow>Education</Eyebrow>
        <h2 className="font-display italic text-3xl text-papier">
          Hochschule Augsburg — B.Sc. Wirtschaftsinformatik
        </h2>
        <p className="mt-2 max-w-[65ch] leading-[1.6] text-papier-gedaempft">
          Business Information Systems, 2010 – 2015.
        </p>
      </section>

      <section data-reveal className="mt-20">
        <Eyebrow>Certifications</Eyebrow>
        <ul className="max-w-[65ch] space-y-6">
          <li>
            <h3 className="text-xl font-medium text-papier">
              iSAQB® Certified Professional for Software Architecture —
              Foundation Level (CPSA-F)
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-medium text-papier">
              Anthropic Claude Certified Architect Foundations (CCA-F)
            </h3>
            <p className="mt-1 leading-[1.6] text-papier-gedaempft">
              In progress, completion expected July 2026. Selected from{" "}
              <span className="text-messing">650+ applicants</span> for the
              program.
            </p>
          </li>
        </ul>
      </section>

      <div className="mt-24 flex flex-wrap gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn ↗
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">Read the case studies →</Link>
        </Button>
      </div>
    </main>
  );
}
