import { earlier, experience } from "@/data";
import Pulse from "./Pulse";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-[15px] font-medium">{job.company}</h3>
              <span className="font-mono text-xs text-muted">{job.location}</span>
            </div>

            <div className="mt-5 space-y-7 border-l border-border pl-5">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-[15px] text-fg">{role.title}</h4>
                    <span className="inline-flex items-center gap-2 font-mono text-xs tabular-nums text-muted">
                      {/* ponytail: the string is the source of truth for "current" */}
                      {role.period.includes("Present") && <Pulse />}
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-sm leading-relaxed text-fg/70 before:absolute before:left-0 before:text-border before:content-['—']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Earlier
      </h3>
      <ul className="mt-4 divide-y divide-border/60">
        {earlier.map((job) => (
          <li
            key={job.company}
            className="flex flex-wrap items-baseline justify-between gap-x-4 py-2.5"
          >
            <span className="text-sm">
              <span className="text-fg">{job.company}</span>
              <span className="mx-2 text-border">·</span>
              <span className="text-fg/60">{job.role}</span>
            </span>
            <span className="font-mono text-xs tabular-nums text-muted">
              {job.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
