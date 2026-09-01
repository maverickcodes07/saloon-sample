import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { GALLERY } from "@/data/salon";
import { Reveal, Overline } from "@/components/salon/primitives";

const spanClass = {
  wide: "sm:col-span-2 aspect-[16/10]",
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto",
  normal: "aspect-[4/3]",
};

export const Gallery = () => {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i + 1) % GALLERY.length);
    },
    []
  );
  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    },
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Overline>The Space</Overline>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
                A look inside <span className="italic text-gold">Bloom.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-textmuted sm:text-right">
              Our storefront, styling floor and private treatment suites — designed to make you feel
              at ease.
            </p>
          </Reveal>
        </div>

        <div
          className="mt-12 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          data-testid="gallery-grid"
        >
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.08} className={spanClass[img.span]}>
              <button
                data-testid={`gallery-item-${i}`}
                onClick={() => setIndex(i)}
                className="group relative h-full w-full overflow-hidden rounded-[2px]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform [transition-duration:1100ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/25" />
                <span className="absolute bottom-4 left-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream/90 text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Plus className="h-5 w-5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              data-testid="lightbox-close"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              data-testid="lightbox-prev"
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              data-testid="lightbox-next"
              onClick={next}
              aria-label="Next"
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl"
            >
              <img
                src={GALLERY[index].src}
                alt={GALLERY[index].alt}
                className="max-h-[80vh] w-auto rounded-[2px] object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-cream/70">
                {GALLERY[index].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
