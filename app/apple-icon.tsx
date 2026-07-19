import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon (D-25): the wordmark initials in the brand lockup
// colours — Papier "L", Messing italic "J" on the ink canvas.
export default async function AppleIcon() {
  const newsreader = await readFile(
    join(process.cwd(), "assets/og/newsreader-italic-400.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14161C",
          fontFamily: "Newsreader",
          fontStyle: "italic",
          fontSize: "100px",
          color: "#EDEAE3",
        }}
      >
        L<span style={{ color: "#C9974D" }}>J</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreader, style: "italic", weight: 400 },
      ],
    },
  );
}
