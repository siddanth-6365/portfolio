import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data";
import Socials from "./Socials";

const nav = [
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="rise">
      <nav className="flex items-center justify-between gap-4 pb-14">
        <a
          href="#top"
          className="font-mono text-[13px] text-fg transition-colors hover:text-accent"
        >
          siddanth.tech
        </a>
        <ul className="flex items-center gap-4 sm:gap-5">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-[13px] text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        {profile.short}
      </h1>

      <p className="mt-3 font-mono text-sm text-muted">
        {profile.role} at{" "}
        <span className="text-fg">{profile.company}</span>
        <span className="mx-2 text-border">·</span>
        {profile.location}
      </p>

      <div className="mt-7 max-w-[38rem] space-y-3 text-[15px] leading-relaxed text-fg/75">
        {profile.bio.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-[13px] text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Résumé
          <ArrowUpRight
            size={14}
            strokeWidth={1.75}
            className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
            aria-hidden
          />
        </a>
        <Socials />
      </div>
    </header>
  );
}
