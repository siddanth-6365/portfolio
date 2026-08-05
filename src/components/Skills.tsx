import { skillGroups } from "@/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="space-y-5">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-xs text-muted sm:pt-0.5">
              {group.label}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fg/80 sm:mt-0">
              {group.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
