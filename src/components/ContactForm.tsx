"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-border bg-transparent px-3 py-2 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(body.message ?? "Something went wrong.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Network error — check your connection and try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-9 max-w-[30rem] space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          className={`mt-2 resize-y ${field}`}
        />
      </div>

      {/* honeypot — hidden from humans, irresistible to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-border px-3 py-1.5 font-mono text-[13px] text-fg transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-border disabled:hover:text-fg"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>

        <p aria-live="polite" className="font-mono text-[13px]">
          {status === "sent" && (
            <span className="text-accent">Sent — I&apos;ll get back to you.</span>
          )}
          {status === "error" && <span className="text-fg/60">{error}</span>}
        </p>
      </div>
    </form>
  );
}
