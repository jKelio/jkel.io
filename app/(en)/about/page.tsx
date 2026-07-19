import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — AI Multiplicator at adesso, Hackathon Regular, Engineer in Augsburg",
  description:
    "Who is Leon Jäkel? Unit Multiplicator for AI Development at adesso SE, organizer of a genAI hackathon in Munich, hackathon regular since 2017 (2nd place at iHack.Ruhr) — and an engineer based in Augsburg.",
  alternates: {
    canonical: "/about",
    languages: { de: "/de/ueber-mich" },
  },
};

export default function AboutPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        The person behind the commit history.
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        If you&apos;ve searched for Leon Jäkel after a meetup, a hackathon, or
        a LinkedIn thread — hi, you found the right one. I&apos;m a software
        engineer in Augsburg, and most of what I do professionally comes down
        to one theme:{" "}
        <span className="text-papier">
          helping teams adopt better ways of building software before those
          ways are obvious.
        </span>
      </p>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
          The AI multiplier thing
        </h2>
        <div className="max-w-[65ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            At adesso SE I&apos;m the{" "}
            <span className="text-papier">
              Unit Multiplicator for AI Development
            </span>{" "}
            in the Insurance Business Line. In practice that means I
            don&apos;t just use agentic tools myself — I make them land for
            other people:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Organizing a genAI hackathon in Munich (July 2026) as AI
              multiplier for adesso teams, getting dozens of engineers
              hands-on with agentic workflows in two days.
            </li>
            <li>
              Building AI-Bites, a live visualization system running as a
              Microsoft Teams tab, so AI learning moments reach people where
              they actually work.
            </li>
            <li>
              Day to day: introducing Spec-Driven Development and Claude Code
              into a live Allianz production environment, and turning what
              works into practices others can copy.
            </li>
          </ul>
        </div>
      </section>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier md:order-2">
          Hackathons made me do it
        </h2>
        <p className="max-w-[65ch] leading-[1.6] text-papier-gedaempft md:order-1">
          I&apos;ve been a hackathon regular since 2017: Hackerkiste (four
          years running), Code Days, AUXHACK, AWS Dev Days, a string of
          voice-assistant events in the Alexa era, and{" "}
          <span className="text-papier">
            2nd place plus the Community Prize at iHack.Ruhr 2018
          </span>
          . Hackathons taught me the habit that still defines how I work:
          pick the new thing up, build something real with it{" "}
          <em>this weekend</em>, and only then form an opinion.
        </p>
      </section>

      <section data-reveal className="mt-24 grid gap-8 md:grid-cols-2">
        <h2 className="font-display italic text-4xl leading-[1.15] text-papier">
          Off the clock
        </h2>
        <div className="max-w-[65ch] space-y-4 leading-[1.6] text-papier-gedaempft">
          <p>
            When I&apos;m not engineering, I&apos;m probably streaming on
            Twitch, riding through Red Dead Redemption 2 for the nth time or
            revisiting Gothic 1, watching ice hockey, or deep in something
            noir — film, music, or books, atmosphere over plot. I&apos;m also
            the kind of person who finds HTTP status codes genuinely funny,
            which either tells you everything or nothing.
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
            Connect on LinkedIn ↗
          </a>
        </Button>
      </div>
    </main>
  );
}
