const WORDS = ["Hair", "Beauty", "Makeup", "Grooming", "Hair Spa", "Keratin", "Bridal", "Colour"];

export const Marquee = () => (
  <section
    aria-hidden="true"
    data-testid="marquee"
    className="relative flex items-center overflow-hidden border-y border-cream/10 bg-charcoal py-8 sm:py-10"
  >
    <div className="marquee-track flex shrink-0 items-center whitespace-nowrap">
      {[...Array(2)].map((_, dup) => (
        <div key={dup} className="flex items-center">
          {WORDS.map((w) => (
            <span key={w + dup} className="flex items-center">
              <span className="px-6 font-serif text-4xl italic text-cream/90 sm:px-10 sm:text-6xl">
                {w}
              </span>
              <span className="text-gold sm:text-2xl">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);
