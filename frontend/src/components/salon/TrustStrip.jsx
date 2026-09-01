import { TRUST } from "@/data/salon";
import { Reveal } from "@/components/salon/primitives";

export const TrustStrip = () => (
  <section className="border-y border-borderline bg-sand" data-testid="trust-strip">
    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-borderline sm:divide-y-0 lg:grid-cols-4">
      {TRUST.map((t, i) => (
        <Reveal key={t.label} delay={i * 0.08}>
          <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
            <div className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
              {t.stat}
            </div>
            <div className="mt-1.5 text-sm font-semibold text-charcoal/90">{t.label}</div>
            <div className="mt-0.5 text-xs text-textmuted">{t.sub}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
