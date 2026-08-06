export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border pt-10">
      <h2 className="flex items-baseline gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="text-fg/25">{index}</span>
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
