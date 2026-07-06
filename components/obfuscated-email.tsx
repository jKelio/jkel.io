"use client";

import { useEffect, useState } from "react";

/*
 * Email is assembled client-side (COPY.md site-wide note) so the address
 * never appears in the server-rendered HTML that scrapers read.
 */
const USER = "leon.jaekel";
const DOMAIN = "outlook.de";

const ObfuscatedEmail = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${USER}@${DOMAIN}`);
  }, []);

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
