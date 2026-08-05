import { achievements, community, education } from "@/data";
import Section from "./Section";

export default function Background() {
  return (
    <Section id="background" title="Background">
      <div className="space-y-9">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-[15px] font-medium">{education.school}</h3>
            <span className="font-mono text-xs tabular-nums text-muted">
              {education.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-fg/60">{education.degree}</p>
        </div>

        {achievements.map((item) => (
          <div key={item.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-[15px] font-medium">{item.title}</h3>
              <span className="font-mono text-xs tabular-nums text-muted">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-fg/60">{item.note}</p>
          </div>
        ))}

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Community
          </h3>
          <div className="mt-4 space-y-5">
            {community.map((item) => (
              <div key={item.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h4 className="text-sm">
                    <span className="text-fg">{item.role}</span>
                    <span className="mx-2 text-border">·</span>
                    <span className="text-fg/60">{item.org}</span>
                  </h4>
                  <span className="font-mono text-xs tabular-nums text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-fg/55">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
