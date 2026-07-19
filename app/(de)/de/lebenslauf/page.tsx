import type { Metadata } from "next";
import Link from "next/link";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lebenslauf — Senior Software Engineer bei adesso SE",
  description:
    "Der Lebenslauf von Leon Jäkel: Senior Software Engineer bei adesso SE, davor sparqs solutions und Power Reply. Ausbildung, iSAQB-CPSA-F- und Anthropic-CCA-F-Zertifizierungen.",
  alternates: {
    canonical: "/de/lebenslauf",
    languages: { en: "/experience" },
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
    dates: "Seit Juli 2021 · Augsburg",
    title: "Senior Software Engineer",
    company: "adesso SE",
    body: (
      <>
        <p>
          Senior Full-Stack Engineer in der Business Line Insurance und{" "}
          <span className="text-papier">
            Unit Multiplicator for AI Development
          </span>{" "}
          – der, den Teams rufen, wenn KI-gestütztes Engineering im
          Delivery-Prozess wirklich funktionieren soll.
        </p>
        <p>
          Aktuell bei der <span className="text-papier">Allianz</span> im
          SDW-Tribe (Global Offer Management): Spec-Driven Development und
          agentische Workflows mit Claude Code in Produktion. Frühere
          Einsätze über adesso: Infineon (CAPRI), Swiss Life,
          Allianz-Dokumentenanalyse.{" "}
          <Link
            href="/de/projekte"
            className="text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing"
          >
            Zu den Case Studies
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    dates: "Juli 2017 – Juni 2021",
    title: "IT-Consultant",
    company: "sparqs solutions GmbH & Co. KG",
    body: (
      <p>
        Full-Stack-Beratung in Energie, Telekommunikation und E-Commerce:
        SAP-CRM/IS-U-Kundenportale, Chatbots mit Microsoft Bot Framework und
        Azure (LUIS, QnA Maker), UI-Frameworks mit Web Components und Polymer
        sowie eine Dependency-Analyse-Plattform für SAP SE.
      </p>
    ),
  },
  {
    dates: "September 2015 – Juni 2017",
    title: "IT-Consultant",
    company: "Power Reply GmbH & Co. KG",
    body: (
      <p>
        Beratung für Enterprise-Kunden in Energie und Telko – Inhouse-Apps
        für iOS, Android und Web; die ersten Jahre mit
        Produktionsverantwortung.
      </p>
    ),
  },
  {
    dates: "2007 – 2015",
    title: "Davor",
    company: "Werkstudent & Praktika",
    body: (
      <p>
        Werkstudenten- und Praktikumsstationen in E-Commerce und
        Dienstleistung (Mietservice 2000, Verlagsgruppe Weltbild u. a.)
        während des Studiums – die Jahre, in denen ich gelernt habe: Software
        zählt erst, wenn echte Kunden sie benutzen.
      </p>
    ),
  },
];

export default function LebenslaufPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Mein Lebenslauf, die lesbare Version.
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Zehn Jahre quer durch Versicherung, Halbleiter und
        Enterprise-Software. Die Kurzfassung steht auf dieser Seite; die
        formale Version ist einen Klick entfernt.
      </p>

      <div className="mt-10 flex flex-wrap gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Auf LinkedIn vernetzen ↗
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/cv-leon-jaekel-de.pdf" download>
            Lebenslauf als PDF ↓
          </a>
        </Button>
      </div>

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
        <Eyebrow>Ausbildung</Eyebrow>
        <h2 className="font-display italic text-3xl text-papier">
          Hochschule Augsburg – B.Sc. Wirtschaftsinformatik
        </h2>
        <p className="mt-2 max-w-[65ch] leading-[1.6] text-papier-gedaempft">
          2010 – 2015.
        </p>
      </section>

      <section data-reveal className="mt-20">
        <Eyebrow as="h2">Zertifizierungen</Eyebrow>
        <ul className="max-w-[65ch] space-y-6">
          <li>
            <h3 className="text-xl font-medium text-papier">
              iSAQB® Certified Professional for Software Architecture –
              Foundation Level (CPSA-F)
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-medium text-papier">
              Anthropic Claude Certified Architect Foundations (CCA-F)
            </h3>
            <p className="mt-1 leading-[1.6] text-papier-gedaempft">
              In Arbeit, Abschluss voraussichtlich Juli 2026. Ausgewählt aus{" "}
              <span className="text-messing">über 650 Bewerbern</span>.
            </p>
          </li>
        </ul>
      </section>

      <div className="mt-24 flex flex-wrap gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Auf LinkedIn vernetzen ↗
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/de/projekte">Zu den Case Studies →</Link>
        </Button>
      </div>
    </main>
  );
}
