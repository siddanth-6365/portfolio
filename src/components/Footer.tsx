import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[46rem] px-6 pb-14 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {profile.short}
        </span>
        <a
          href="https://github.com/siddanth-6365/portfolio"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-fg"
        >
          Source ↗
        </a>
      </div>
    </footer>
  );
}
