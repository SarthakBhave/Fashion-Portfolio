"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { contact } from "@/lib/portfolio-content";

export function EmailAction() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  if (revealed) {
    return (
      <div className="email-revealed">
        <span className="email-address">{contact.email}</span>
        <button type="button" className="email-copy" onClick={copyEmail}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="contact-icon email-trigger"
      aria-label={`Show email: ${contact.email}`}
      onClick={() => setRevealed(true)}
    >
      <span className="email-tooltip">{contact.email}</span>
      <Mail size={22} strokeWidth={1.6} />
    </button>
  );
}
