// An intraday output curve: night trough, morning ramp, midday plateau,
// evening peak. The kind of series the day job is made of.
const POINTS = [
  230, 236, 241, 238, 244, 239, 233, 226, 214, 198, 176, 158, 147, 139, 132,
  126, 121, 128, 134, 130, 122, 114, 106, 112, 118, 108, 96, 84, 72, 64, 58, 52,
  60, 74, 92, 116, 148, 178, 202, 220, 232,
];

const trace = POINTS.map((y, i) => `${i === 0 ? "M" : "L"}${i * 30},${y}`).join(
  " "
);

export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden sm:h-[40rem]"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(115%_85%_at_50%_0%,#000_25%,transparent_78%)]" />

      {/* hidden on phones: squeezing 1200 units into 375px makes the slopes meaningless */}
      <svg
        className="absolute inset-x-0 bottom-0 hidden h-[19rem] w-full [mask-image:linear-gradient(to_bottom,transparent,#000_45%,#000_72%,transparent)] sm:block"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="trace-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.07" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={`${trace} L1200,300 L0,300 Z`} fill="url(#trace-fill)" />
        <path
          className="trace"
          d={trace}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
