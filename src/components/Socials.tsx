import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { socials } from "@/data";

const icons = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  mail: Mail,
} as const;

export default function Socials() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {socials.map((s) => {
        const Icon = icons[s.key];
        return (
          <li key={s.key}>
            <a
              href={s.href}
              target={s.key === "mail" ? undefined : "_blank"}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <Icon size={15} strokeWidth={1.75} aria-hidden />
              <span className="font-mono text-[13px] underline decoration-border decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
                {s.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
