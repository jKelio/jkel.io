import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Über mich — AI Multiplicator bei adesso, Hackathon-Stammgast, Engineer in Augsburg",
  description:
    "Wer ist Leon Jäkel? Unit Multiplicator for AI Development bei adesso SE, Organisator eines genAI-Hackathons in München, Hackathon-Stammgast seit 2017 (2. Platz beim iHack.Ruhr) — und Engineer in Augsburg.",
  alternates: {
    canonical: "/de/ueber-mich",
    languages: { en: "/about" },
  },
};

export default function UeberMichPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Der Mensch hinter der Commit-History.
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        Wenn du nach einem Meetup, einem Hackathon oder einem
        LinkedIn-Thread nach Leon Jäkel gesucht hast – hi, du bist richtig.
        Ich bin Software Engineer in Augsburg, und fast alles, was ich
        beruflich tue, läuft auf ein Thema hinaus:{" "}
        <span className="text-papier">
          Teams dabei helfen, bessere Wege des Software-Bauens zu
          übernehmen, bevor sie offensichtlich sind.
        </span>
      </p>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
          Die Sache mit dem AI-Multiplikator
        </h2>
        <div className="max-w-[65ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            Bei adesso SE bin ich der{" "}
            <span className="text-papier">
              Unit Multiplicator for AI Development
            </span>{" "}
            in der Business Line Insurance. In der Praxis heißt das: Ich
            benutze agentische Tools nicht nur selbst – ich bringe sie bei
            anderen zum Laufen:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Organisation eines genAI-Hackathons in München (Juli 2026) als
              AI-Multiplikator für adesso-Teams – Dutzende Engineers in zwei
              Tagen hands-on mit agentischen Workflows.
            </li>
            <li>
              AI-Bites, ein Live-Visualisierungssystem als
              Microsoft-Teams-Tab, damit KI-Lernmomente die Leute dort
              erreichen, wo sie ohnehin arbeiten.
            </li>
            <li>
              Tagesgeschäft: Spec-Driven Development und Claude Code in
              einer produktiven Allianz-Umgebung einführen – und das, was
              funktioniert, in Praktiken übersetzen, die andere kopieren
              können.
            </li>
          </ul>
        </div>
      </section>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier md:order-2">
          Hackathons sind schuld
        </h2>
        <p className="max-w-[65ch] leading-[1.6] text-papier-gedaempft md:order-1">
          Seit 2017 bin ich Hackathon-Stammgast: Hackerkiste (vier Jahre in
          Folge), Code Days, AUXHACK, AWS Dev Days, eine Reihe
          Voice-Assistant-Events aus der Alexa-Ära und{" "}
          <span className="text-papier">
            2. Platz plus Community-Preis beim iHack.Ruhr 2018
          </span>
          . Hackathons haben mir die Gewohnheit beigebracht, die bis heute
          meine Arbeit prägt: das Neue in die Hand nehmen,{" "}
          <em>noch am Wochenende</em> etwas Echtes damit bauen – und erst
          dann eine Meinung haben.
        </p>
      </section>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
          Nach Feierabend
        </h2>
        <div className="max-w-[65ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            Wenn ich nicht baue, streame ich vermutlich auf Twitch, reite
            zum x-ten Mal durch Red Dead Redemption 2 oder besuche Gothic 1
            wieder, schaue Eishockey oder stecke in etwas Noir – Film, Musik
            oder Buch, Atmosphäre schlägt Plot. Außerdem bin ich der Typ
            Mensch, der HTTP-Statuscodes ehrlich lustig findet – was
            entweder alles über mich sagt oder nichts.
          </p>
          <p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing"
            >
              GitHub ↗
            </a>{" "}
            <span aria-hidden>·</span>{" "}
            <a
              href={SITE.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing"
            >
              Twitch ↗
            </a>
          </p>
        </div>
      </section>

      <div className="mt-24">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Auf LinkedIn vernetzen ↗
          </a>
        </Button>
      </div>
    </main>
  );
}
