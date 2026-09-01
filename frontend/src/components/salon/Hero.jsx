import { motion, useReducedMotion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { PHOTOS, SALON } from "@/data/salon";
import { WhatsAppButton, CallButton } from "@/components/salon/primitives";

const EASE = [0.22, 1, 0.36, 1];

const Line = ({ children, delay }) => {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={reduce ? {} : { y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Hero = () => {
  const reduce = useReducedMotion();
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12 }}
        animate={reduce ? {} : { scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <img
          src={PHOTOS.storefront}
          alt="Bloom Unisex Salon storefront illuminated at night in Vadodara"
          className="h-full w-full object-cover object-center"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 sm:px-8 sm:pb-32 lg:pb-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="uppercase tracking-[0.28em] text-[11px] font-semibold text-gold sm:text-xs">
            Premium Beauty & Grooming
          </span>
          <span className="hidden h-3 w-px bg-cream/30 sm:block" />
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cream/80">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {SALON.addressShort}
          </span>
        </motion.div>

        <h1 className="max-w-4xl font-serif text-[2.6rem] font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          <Line delay={0.35}>Your beauty,</Line>
          <Line delay={0.5}>
            our <span className="italic text-gold">craft.</span>
          </Line>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          A premium unisex salon in Vadodara for hair, beauty, makeup and grooming — thoughtful,
          skilled care in a calm, spotless space.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <WhatsAppButton
            testid="hero-whatsapp-cta"
            className="bg-gold text-charcoal hover:bg-cream hover:text-charcoal shadow-[0_16px_40px_-16px_rgba(197,160,89,0.7)]"
          />
          <a
            data-testid="hero-call-cta"
            href={`tel:${SALON.phoneRaw}`}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-charcoal active:scale-[0.98]"
          >
            Call {SALON.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex items-center gap-3 text-sm text-cream/75"
        >
          <span className="flex items-center gap-0.5 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold" />
            ))}
          </span>
          <span className="font-semibold text-cream">{SALON.rating}</span>
          <span className="text-cream/50">·</span>
          <span>Rated by happy clients on Google</span>
        </motion.div>
      </div>
    </section>
  );
};
