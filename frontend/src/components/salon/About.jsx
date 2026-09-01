import { PHOTOS } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

const values = [
  { k: "Consultation-led", v: "We listen first, then suggest what truly suits you." },
  { k: "Honest advice", v: "Guidance you can trust — the right service, not the biggest bill." },
  { k: "Calm & clean", v: "A relaxing, spotless space designed for your comfort." },
];

export const About = () => (
  <section id="about" className="scroll-mt-24 bg-cream py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2px]">
              <img
                src={PHOTOS.spaRoom}
                alt="Private treatment suite at Bloom Unisex Salon"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform [transition-duration:1200ms] ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-4">
          <Reveal>
            <Overline>Our Story</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
              A place where care <span className="italic text-gold">becomes a feeling.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-textmuted sm:text-lg">
              Bloom is a premium unisex salon on Waghodia Road, Vadodara. Our team — known and loved by
              name — brings precision, patience and genuine warmth to every haircut, treatment,
              facial and finishing touch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-textmuted">
              We believe great beauty work starts with listening. That philosophy is why our guests
              walk out feeling fresh, confident and cared for — and keep coming back.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5 border-t border-borderline pt-8">
            {values.map((it, i) => (
              <Reveal key={it.k} delay={0.1 + i * 0.08}>
                <div className="flex gap-5">
                  <span className="mt-1 font-serif text-lg text-gold">0{i + 1}</span>
                  <div>
                    <div className="font-serif text-xl text-charcoal">{it.k}</div>
                    <p className="mt-0.5 text-sm text-textmuted">{it.v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
