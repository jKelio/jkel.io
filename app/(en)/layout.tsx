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
    "Leon Jäkel is a Senior Software Engineer in Augsburg who brings agentic engineering with Claude Code and Spec-Driven Development into enterprise production — built on a decade of full-stack work for Allianz, Infineon, Swiss Life and SAP.",
  alternates: {
    canonical: "/",
    languages: { de: "/de" },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="en">{children}</RootShell>;
}
