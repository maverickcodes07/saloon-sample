import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL, SALON } from "@/data/salon";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    setTimeout(() => scrollTo(id), open ? 260 : 0);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-borderline shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            data-testid="nav-logo"
            onClick={() => handleNav("hero")}
            className={`font-serif text-2xl font-semibold leading-none tracking-tight transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-cream"
            }`}
          >
            {SALON.name}
            <span className="text-gold">.</span>
          </button>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => handleNav(l.id)}
                className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-charcoal/75 hover:text-charcoal" : "text-cream/85 hover:text-cream"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              data-testid="nav-whatsapp-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 sm:inline-flex active:scale-[0.98] ${
                scrolled
                  ? "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                  : "bg-cream text-charcoal hover:bg-gold"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled ? "text-charcoal hover:bg-charcoal/5" : "text-cream hover:bg-cream/10"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[60] bg-charcoal text-cream lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
              <span className="font-serif text-2xl font-semibold">
                {SALON.name}
                <span className="text-gold">.</span>
              </span>
              <button
                data-testid="nav-mobile-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream hover:bg-cream/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-5 pt-6 sm:px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`mobile-nav-link-${l.id}`}
                  onClick={() => handleNav(l.id)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-cream/10 py-5 text-left font-serif text-3xl text-cream/90 transition-colors hover:text-gold"
                >
                  {l.label}
                </motion.button>
              ))}
              <a
                data-testid="mobile-nav-whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-charcoal"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
