import { WHY } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

export const WhyChooseUs = () => (
  <section className="bg-sand py-24 sm:py-32" data-testid="why-choose-us">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl">
        <Reveal>
          <Overline>Why Bloom</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
            The Bloom <span className="italic text-gold">manifesto.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-md text-base leading-relaxed text-textmuted">
            Four promises we keep on every visit — the small things done right, every single time.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 divide-y divide-borderline border-t border-borderline">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div
              data-testid={`manifesto-${i}`}
              className="group grid grid-cols-1 gap-4 py-9 transition-colors duration-300 sm:grid-cols-12 sm:gap-8 sm:py-11"
            >
              <div className="sm:col-span-2">
                <span className="font-serif text-5xl font-medium text-borderline transition-colors duration-500 group-hover:text-gold sm:text-6xl">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-3xl text-charcoal sm:col-span-4 sm:text-4xl">
                {w.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-textmuted sm:col-span-6">
                {w.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
