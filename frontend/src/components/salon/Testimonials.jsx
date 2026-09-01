import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, SALON } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

export const Testimonials = () => (
  <section id="reviews" className="scroll-mt-24 bg-charcoal py-24 text-cream sm:py-32">
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

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.08}>
            <figure
              data-testid={`testimonial-${i}`}
              className="break-inside-avoid rounded-[2px] border border-cream/10 bg-[#161616] p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <Quote className="h-7 w-7 text-gold/70" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-cream/85">
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
