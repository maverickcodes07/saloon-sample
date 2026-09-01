import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "@/data/salon";
import { Reveal, Overline, WhatsAppButton } from "@/components/salon/primitives";

export const Services = () => {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);

  return (
    <section id="services" className="scroll-mt-24 bg-charcoal py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Overline>What We Do</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl">
              Services crafted around <span className="italic text-gold">you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70">
              From precision hair work to restorative treatments, beauty rituals and refined
              grooming — everything under one calm, unisex roof.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2.5" data-testid="services-tabs">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                data-testid={`service-tab-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`rounded-full border px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  active === s.id
                    ? "border-gold bg-gold text-charcoal"
                    : "border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <p className="max-w-xl font-serif text-xl text-cream/80 sm:text-2xl">{current.blurb}</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[2px] border border-cream/10 bg-cream/10 sm:grid-cols-2">
              {current.items.map((it) => (
                <div
                  key={it.name}
                  data-testid={`service-item-${it.name}`}
                  className="group bg-charcoal p-6 transition-colors duration-300 hover:bg-[#161616] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-cream sm:text-2xl">{it.name}</h3>
                    <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-cream/60">
              Not sure what you need? Message us — we'll guide you to the right service.
            </p>
            <WhatsAppButton
              testid="services-whatsapp-cta"
              label="Ask on WhatsApp"
              className="bg-gold text-charcoal hover:bg-cream"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
