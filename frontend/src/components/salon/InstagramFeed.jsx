import { Instagram, ArrowUpRight, Heart } from "lucide-react";
import { PHOTOS, SALON } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

const posts = [
  { src: PHOTOS.storefront, caption: "Our home on Waghodia Road ✨" },
  { src: PHOTOS.pedicure, caption: "Rose-petal pedicure rituals 🌹" },
  { src: PHOTOS.interior, caption: "Where the magic happens 💇" },
  { src: PHOTOS.spaRoom, caption: "Unwind in our spa suite 🕯️" },
];

export const InstagramFeed = () => (
  <section id="instagram" className="scroll-mt-24 bg-sand py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <Overline>On Instagram</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
              Follow the <span className="italic text-gold">glow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={SALON.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-textmuted transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              {SALON.instagram}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <a
            data-testid="instagram-follow-btn"
            href={SALON.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-gold hover:text-charcoal active:scale-[0.98]"
          >
            <Instagram className="h-[18px] w-[18px]" />
            Follow Us
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {posts.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 0.07}>
            <a
              data-testid={`instagram-post-${i}`}
              href={SALON.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-[2px]"
            >
              <img
                src={p.src}
                alt={`Bloom Salon Instagram — ${p.caption}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform [transition-duration:900ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="flex items-center gap-2 p-4 text-xs font-medium text-cream sm:p-5 sm:text-sm">
                  <Instagram className="h-4 w-4 shrink-0 text-gold" />
                  {p.caption}
                </span>
              </span>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Heart className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
