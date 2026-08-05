import { ArrowUpRight } from "lucide-react";
import { featured, otherWork } from "@/data";
import Section from "./Section";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 font-mono text-[13px] text-muted transition-colors hover:text-fg"
    >
      {children}
      <ArrowUpRight
        size={13}
        strokeWidth={1.75}
        className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
        aria-hidden
      />
    </a>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-11">
        {featured.map((p) => (
          <article key={p.slug}>
            <h3 className="text-[15px] font-medium">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {p.title}
              </a>
            </h3>

            <p className="mt-1.5 text-sm text-fg/70">{p.tagline}</p>

            <p className="mt-3 font-mono text-xs text-muted">
              {p.stack.join(" · ")}
            </p>

            <ul className="mt-4 space-y-2.5">
              {p.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-4 text-sm leading-relaxed text-fg/70 before:absolute before:left-0 before:text-border before:content-['—']"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <ExternalLink href={p.repo}>Code</ExternalLink>
              {p.video && <ExternalLink href={p.video}>Demo</ExternalLink>}
              {p.live && <ExternalLink href={p.live}>Live</ExternalLink>}
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Other work
      </h3>
      <ul className="mt-4 divide-y divide-border/60">
        {otherWork.map((p) => (
          <li key={p.title}>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-wrap items-baseline justify-between gap-x-4 py-2.5"
            >
              <span className="text-sm text-fg transition-colors group-hover:text-accent">
                {p.title}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-fg/55">
                {p.note}
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.75}
                  className="text-border transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
