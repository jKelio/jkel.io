import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_ALT =
  "Leon Jäkel — Agentic Engineering & Senior Full-Stack Development, Augsburg";

/*
 * The Ink & Brass social card (D-25): the site compressed to 1200×630 —
 * wordmark lockup on the ink canvas, hairline frame, mono subline, status
 * chip. Satori takes TTF/OTF/WOFF (not woff2); the static WOFF subsets
 * live in assets/og/. Colours are DESIGN.md §1 verbatim; the corner glow
 * runs hotter than the on-site 4% so it survives PNG compression.
 */
export async function brandCard() {
  const [newsreader, plexMono] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/newsreader-italic-400.woff")),
    readFile(join(process.cwd(), "assets/og/ibm-plex-mono-400.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#14161C",
          padding: "40px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #33363F",
            borderRadius: "4px",
            padding: "56px 64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-220px",
              right: "-160px",
              width: "640px",
              height: "640px",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(201,151,77,0.14) 0%, rgba(201,151,77,0) 70%)",
            }}
          />

          <div
            style={{
              display: "flex",
              fontFamily: "IBM Plex Mono",
              fontSize: "22px",
              letterSpacing: "2px",
              color: "#A7A49B",
            }}
          >
            JKEL.IO
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontFamily: "Newsreader",
                fontStyle: "italic",
                fontSize: "140px",
                lineHeight: 1,
                color: "#EDEAE3",
              }}
            >
              Leon&nbsp;<span style={{ color: "#C9974D" }}>Jäkel</span>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "IBM Plex Mono",
                fontSize: "24px",
                letterSpacing: "3px",
                color: "#A7A49B",
              }}
            >
              AGENTIC ENGINEERING · SENIOR FULL-STACK DEVELOPMENT
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              alignSelf: "flex-start",
              border: "1px solid #33363F",
              borderRadius: "9999px",
              backgroundColor: "#0F1116",
              padding: "12px 26px",
              fontFamily: "IBM Plex Mono",
              fontSize: "22px",
              letterSpacing: "2px",
              color: "#A7A49B",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#C9974D",
              }}
            />
            HTTP/1.1 200 OK — AUGSBURG, DE
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Newsreader", data: newsreader, style: "italic", weight: 400 },
        { name: "IBM Plex Mono", data: plexMono, style: "normal", weight: 400 },
      ],
    },
  );
}
