export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border pt-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
