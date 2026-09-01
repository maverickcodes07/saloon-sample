import { useEffect, useRef, useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS, SALON } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

export const Testimonials = () => {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden bg-charcoal py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Overline>Kind Words</Overline>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
                Loved by our <span className="italic text-gold">guests.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-full border border-cream/15 px-5 py-3">
              <span className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </span>
              <span className="text-sm">
                <span className="font-semibold text-cream">{SALON.rating}</span>
                <span className="text-cream/60"> · Verified Google reviews</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        data-testid="reviews-slider"
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8"
      >
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name + i}
            data-card
            data-testid={`testimonial-${i}`}
            className="flex w-[86vw] shrink-0 snap-start flex-col rounded-[2px] border border-cream/10 bg-[#161616] p-7 transition-colors duration-300 hover:border-gold/40 sm:w-[400px] sm:p-8"
          >
            <Quote className="h-7 w-7 text-gold/70" />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-cream/85">
              {t.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-cream/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-serif text-lg font-semibold text-charcoal">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="font-semibold text-cream">{t.name}</div>
                <div className="text-xs text-cream/55">{t.service}</div>
              </div>
              <span className="ml-auto flex items-center gap-0.5 text-gold">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
        <span className="w-1 shrink-0 sm:hidden" aria-hidden />
      </div>

      <div className="mx-auto mt-9 flex max-w-7xl items-center gap-5 px-5 sm:px-8">
        <div className="relative h-px flex-1 bg-cream/15">
          <span
            className="absolute left-0 top-0 h-px bg-gold transition-[width] duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <div className="flex gap-2.5">
          <button
            data-testid="reviews-prev"
            onClick={() => scrollByCards(-1)}
            disabled={atStart}
            aria-label="Previous reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            data-testid="reviews-next"
            onClick={() => scrollByCards(1)}
            disabled={atEnd}
            aria-label="Next reviews"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
