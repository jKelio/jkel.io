import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Projekte — Claude Code in Produktion, Angular-Microfrontends & Versicherungsplattformen",
  description:
    "Case Studies von Leon Jäkel: Spec-Driven Development mit Claude Code auf der globalen Offer-Management-Plattform der Allianz, Angular-Upgrades von 17 bis 22, Dokumentenanalyse im Einsatz in der gesamten Allianz Gruppe und Modernisierung von Versicherungssoftware.",
  alternates: {
    canonical: "/de/projekte",
    languages: { en: "/projects" },
  },
};

// Hervorgehobene Tags bekommen Messing-Text (DESIGN.md §4).
const Tag = ({
  children,
  featured = false,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) => (
  <li
    className={`rounded-full border border-haarlinie px-3 py-1 font-utility text-xs ${
      featured ? "text-messing" : "text-papier-gedaempft"
    }`}
  >
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
    title: "Swiss Life Deutschland – Modernisierung von Versicherungssoftware",
    dates: "07/2022 – 08/2024",
    body: "Inkasso-/Exkasso- und Rentenverwaltungs-Anwendungen von Oracle Forms zu entkoppelten modernen Web-Apps migriert. Prozessanalyse, Full-Stack-Entwicklung (Java, Spring Boot, Vue, TypeScript, Oracle DB, OpenAPI), Code-Reviews und Mentoring von Junior-Entwicklern in einem zweijährigen Einsatz.",
  },
  {
    title: "CAPRI, Infineon – DevOps & Frontend Engineering",
    dates: "09/2024 – 12/2024",
    body: "Plattform zwischen Marktbeobachtung und Produktentwicklung. Sustaining Engineering, Angular-17→18-Upgrade, Release-Management auf OpenShift, Code-Reviews. Stack: Nest.js, Angular, Prisma, TypeORM.",
  },
  {
    title: "SAP SE – Dependency-Analyse-Tool",
    dates: "05/2020 – 06/2021",
    body: "Analyse kommerzieller und Open-Source-Abhängigkeiten gegen Compliance-Regeln. Java, jersey, Postgres, Apache Lucene, Kubernetes, Docker.",
  },
  {
    title: "adesso BOOKR – Arbeitsplatzbuchung",
    dates: "seit 05/2023",
    body: "Internes Tool zur Buchung von Schreibtischen, Telefonboxen und Parkplätzen in Open-Space-Büros (Angular, Java, Spring Boot). Meine Rolle: technisches Mentoring, Pair Programming, QA, Code-Reviews.",
  },
  {
    title: "Früher (2007–2020)",
    dates: "",
    body: "Beratung in Energie, Telko, E-Commerce, Finanzdienstleistung und Versicherung: SAP-CRM/IS-U-Portale, Chatbots (MS Bot Framework, Azure Bot Service, LUIS, QnA Maker), Web-Components-/Polymer-UI-Frameworks, Unternehmens-Apps für iOS/Android/Web.",
  },
];

export default function ProjektePage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Wo Spec-Driven Development auf Produktion trifft.
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Zwei Case Studies im Detail, der Rest im Überblick. Jedes Projekt
        hier ging zu echten Nutzern in regulierten Branchen.
      </p>

      {/* Case Study 1 */}
      <article data-reveal className="mt-24 rounded border border-haarlinie bg-tinte-hoch p-10">
        <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
          ALLIANZ SE · SDW-TRIBE · SEIT 12/2024
        </p>
        <h2 className="mt-4 font-display italic text-3xl leading-[1.2] text-papier">
          Global Offer Management bei der Allianz – Claude Code in
          Enterprise-Produktion
        </h2>
        <div className="mt-6 max-w-[70ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            <span className="text-papier">Der Kontext.</span> Die Allianz
            baut eine neue globale Vertriebsplattform, und Offer Management
            ist eines ihrer Kernmodule: skalierbar, modular und
            konfigurierbar genug, um internationale Ländersetups aus einer
            Codebasis zu bedienen.
          </p>
          <p>
            <span className="text-papier">Meine Rolle.</span> Senior
            Full-Stack Engineer im SPM-/Global-Offer-Management-Team – und
            der Engineer, der Spec-Driven Development mit Claude Code und
            MCP-Integrationen in die tägliche Delivery bringt. Specs werden
            zum Vertrag; Agenten übernehmen die mechanische Arbeit; Engineers
            reviewen, entscheiden und liefern. In einer Produktionsumgebung
            mit echten Compliance-Anforderungen, nicht im Sandkasten.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Microfrontend-Implementierung für das Offer-Management-Modul
            </li>
            <li>
              Angular-Upgrades von Version 17 bis 22 – eine Live-Plattform
              über Major-Releases hinweg aktuell gehalten
            </li>
            <li>Wiederverwendbare UI-Komponenten, teamübergreifend im Einsatz</li>
            <li>
              Teamübergreifende Architekturarbeit über Ländersetups hinweg
            </li>
          </ul>
          <p>
            <span className="text-papier">Das Ergebnis.</span> Spec-Driven
            Development trägt die Delivery des Moduls über Angular, Spring
            Boot, Camunda, BFF und DSGVO-relevante Schichten hinweg – ohne
            Layer-Spezialisten. Agentische QA vor jedem Pull Request findet
            Probleme früh, darunter eine stille CI-Lücke und einen
            Architekturfehler noch vor der ersten Zeile Code. Der Großteil
            des KI-Aufwands fließt in die Ausarbeitung der Specs, nicht in
            die Ausführung – die Spec ist die Arbeit.
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
            <Tag key={t} featured={t === "Claude Code"}>
              {t}
            </Tag>
          ))}
        </ul>
      </article>

      {/* Case Study 2 */}
      <article data-reveal className="mt-12 rounded border border-haarlinie bg-tinte-hoch p-10">
        <p className="font-utility text-xs tracking-[0.04em] text-papier-gedaempft">
          ALLIANZ SE · 07/2021 – 10/2022
        </p>
        <h2 className="mt-4 font-display italic text-3xl leading-[1.2] text-papier">
          Automatisierte Dokumentenanalyse – im Einsatz in der gesamten
          Allianz Gruppe
        </h2>
        <div className="mt-6 max-w-[70ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            <span className="text-papier">Der Kontext.</span> Underwriter in
            der ganzen Allianz vergleichen und bewerten große Mengen an
            Dokumenten. In diesem Projekt entstanden Webanwendungen, die
            Analyse, Bewertung und Vergleich von Underwriting-Dokumenten
            automatisieren – global ausgerollt in der Allianz Gruppe.
          </p>
          <p>
            <span className="text-papier">Meine Rolle.</span> Lead Frontend
            Developer. Ich habe den Dokumenten-Viewer im Herzen des Produkts
            gebaut, die Komponentenarchitektur und REST-APIs mit dem
            Backend-Team entworfen und die Entwickler im Projekt technisch
            onboardet.
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

      {/* Weitere Projekte */}
      <section className="mt-32">
        <Eyebrow as="h2">Weitere Projekte</Eyebrow>
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
          Du arbeitest an etwas in diesem Umfeld?
        </h2>
        <div className="mt-8">
          <Button asChild>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              Auf LinkedIn vernetzen ↗
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
