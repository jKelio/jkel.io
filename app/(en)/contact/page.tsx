import type { Metadata } from "next";

import BrassGlow from "@/components/brass-glow";
import Eyebrow from "@/components/eyebrow";
import ObfuscatedEmail from "@/components/obfuscated-email";
import SocialIcons from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Kontakt — Reach Leon Jäkel on LinkedIn",
  description:
    "Contact Leon Jäkel — Senior Software Engineer and AI Multiplicator in Augsburg. Connect on LinkedIn for agentic engineering exchange, speaking and Claude Code workshops, recruiting, or mentoring.",
  alternates: {
    canonical: "/contact",
    languages: { de: "/de/kontakt" },
  },
};

const INVITES: { title: string; body: string }[] = [
  {
    title: "Agentic engineering exchange.",
    body: "You're bringing Claude Code, MCP, or Spec-Driven Development into an enterprise setting and want to compare notes — my favorite kind of message.",
  },
  {
    title: "Speaking & workshops.",
    body: "Meetups, hackathons, or internal enablement sessions on AI-assisted engineering — as an AI speaker based in Augsburg, Munich and remote work fine too.",
  },
  {
    title: "Recruiting conversations.",
    body: "I'm not actively looking, but I read every thoughtful message.",
  },
  {
    title: "Mentoring.",
    body: "Students and junior developers with real questions: ask. I've onboarded and mentored developers on every project I've been part of, and I like doing it.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative mx-auto w-full max-w-[1200px] flex-1 px-6 pt-40 pb-32">
      <BrassGlow />
      <p className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-haarlinie bg-tinte-tief px-4 py-1.5 font-utility text-[13px] tracking-[0.08em] text-papier-gedaempft">
        <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
        STATUS 200 · OPEN FOR EXCHANGE
      </p>

      <h1 className="max-w-3xl font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-papier">
        Contact — LinkedIn Is the Fastest Way
      </h1>
      <p className="mt-8 max-w-[65ch] text-lg leading-[1.6] text-papier-gedaempft">
        The best way to reach me (Kontakt) is{" "}
        <span className="text-papier">LinkedIn</span> — I read connection
        requests and messages there daily.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Button asChild>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            Connect with me on LinkedIn ↗
          </a>
        </Button>
        <SocialIcons />
      </div>

      <p className="mt-8 leading-[1.6] text-papier-gedaempft">
        Prefer email? <ObfuscatedEmail />
      </p>

      <section data-reveal className="mt-24">
        <Eyebrow>What I&apos;m happy to hear about</Eyebrow>
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
        Based in Augsburg, Bavaria — working with teams across Germany and
        internationally.
      </p>
    </main>
  );
}
