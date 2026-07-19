"use client";

import { useSyncExternalStore } from "react";

/*
 * Email is assembled client-side (COPY.md site-wide note) so the address
 * never appears in the server-rendered HTML that scrapers read.
 * useSyncExternalStore returns the server snapshot (null) during SSR and
 * hydration, then the real address — no effect, no hydration mismatch.
 */
const USER = "leon.jaekel";
const DOMAIN = "outlook.de";

const subscribe = () => () => {};

const ObfuscatedEmail = () => {
  const email = useSyncExternalStore(
    subscribe,
    () => `${USER}@${DOMAIN}`,
    () => null,
  );

  if (!email) {
    return (
      <span className="font-utility text-sm text-papier-gedaempft">
        [ decoding address… ]
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className="font-utility text-sm text-papier underline decoration-messing decoration-1 underline-offset-2 hover:text-messing"
    >
      {email}
    </a>
  );
};

export default ObfuscatedEmail;
