import { Sparkles, ShieldCheck, Gem, HeartHandshake } from "lucide-react";
import { WHY } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

const icons = [Sparkles, ShieldCheck, Gem, HeartHandshake];

export const WhyChooseUs = () => (
  <section className="bg-sand py-24 sm:py-32" data-testid="why-choose-us">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Overline>Why Bloom</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
              Reasons our clients <span className="italic text-gold">stay.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-textmuted">
              The little things done right, every single visit — that's what earns real trust.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2px] border border-borderline bg-borderline sm:grid-cols-2 lg:col-span-8">
          {WHY.map((w, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="h-full bg-cream p-8 transition-colors duration-300 hover:bg-white sm:p-10">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-2xl text-charcoal">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textmuted">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
