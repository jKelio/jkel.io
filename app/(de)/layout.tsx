import type { Metadata } from "next";

import RootShell from "@/components/root-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://jkel.io"),
  title: {
    default:
      "Leon Jäkel — Agentic Engineering & Senior Full-Stack Development, Augsburg",
    template: "%s | Leon Jäkel",
  },
  description:
    "Leon Jäkel ist Senior Software Engineer in Augsburg und bringt Agentic Engineering mit Claude Code und Spec-Driven Development in produktive Enterprise-Umgebungen — auf Basis von zehn Jahren Full-Stack-Arbeit für Allianz, Infineon, Swiss Life und SAP.",
  alternates: {
    canonical: "/de",
    languages: { en: "/" },
  },
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="de">{children}</RootShell>;
}
