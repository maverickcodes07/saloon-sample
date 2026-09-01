import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { TRANSFORMATIONS } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

const BeforeAfter = ({ item }) => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => (dragging.current = false);

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      data-testid="before-after-slider"
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[2px] sm:aspect-[16/10]"
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      {/* After (base) */}
      <img
        src={item.after}
        alt={`${item.label} — after result at Bloom Salon`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur-sm">
        After
      </span>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={item.before}
          alt={`${item.label} — before at Bloom Salon`}
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : "100%" }}
          draggable={false}
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-cream"
        style={{ left: `${pos}%` }}
      >
        <button
          data-testid="before-after-handle"
          onMouseDown={onDown}
          onTouchStart={onDown}
          onKeyDown={onKey}
          aria-label="Drag to compare before and after"
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-cream text-charcoal shadow-[0_6px_20px_-6px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export const Results = () => {
  const [active, setActive] = useState(TRANSFORMATIONS[0].id);
  const item = TRANSFORMATIONS.find((t) => t.id === active);

  return (
    <section id="results" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Overline>Real Results</Overline>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
                Drag to see the <span className="italic text-gold">difference.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-textmuted">
                {item.note} Slide the handle to reveal the transformation.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2.5" data-testid="results-tabs">
                {TRANSFORMATIONS.map((t) => (
                  <button
                    key={t.id}
                    data-testid={`results-tab-${t.id}`}
                    onClick={() => setActive(t.id)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                      active === t.id
                        ? "border-gold bg-gold text-charcoal"
                        : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-xs italic text-textmuted/80">
                Representative results shown for illustration.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <BeforeAfter key={item.id} item={item} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
