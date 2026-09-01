import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, TEL_URL } from "@/data/salon";

export const FloatingActions = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <AnimatePresence>
        {show && (
          <motion.a
            data-testid="desktop-floating-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_14px_36px_-10px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 lg:flex"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-wa/40" />
            <MessageCircle className="relative h-7 w-7" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile fixed bottom bar */}
      <div
        data-testid="mobile-action-bar"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-borderline bg-cream/95 backdrop-blur-lg lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          data-testid="mobile-bottom-call-btn"
          href={TEL_URL}
          className="flex items-center justify-center gap-2 border-r border-borderline py-4 text-sm font-semibold text-charcoal active:bg-sand"
        >
          <Phone className="h-[18px] w-[18px] text-gold" />
          Call
        </a>
        <a
          data-testid="mobile-bottom-whatsapp-btn"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-wa py-4 text-sm font-semibold text-white active:bg-[#1eb955]"
        >
          <MessageCircle className="h-[18px] w-[18px]" />
          WhatsApp
        </a>
      </div>
    </>
  );
};
