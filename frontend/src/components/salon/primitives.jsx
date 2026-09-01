import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, TEL_URL } from "@/data/salon";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 26, className = "" }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const Overline = ({ children, className = "" }) => (
  <span
    className={`inline-block uppercase tracking-[0.28em] text-[11px] sm:text-xs font-semibold text-gold ${className}`}
  >
    {children}
  </span>
);

export const WhatsAppButton = ({
  label = "WhatsApp Us",
  testid = "whatsapp-cta",
  variant = "solid",
  className = "",
}) => {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[background-color,color,transform,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:scale-[0.98]";
  const styles =
    variant === "solid"
      ? "bg-charcoal text-cream hover:bg-gold hover:text-charcoal shadow-[0_10px_30px_-12px_rgba(28,28,28,0.55)]"
      : "border border-charcoal/25 text-charcoal hover:border-gold hover:text-gold bg-transparent";
  return (
    <a
      data-testid={testid}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
      {label}
    </a>
  );
};

export const CallButton = ({
  label = "Call Now",
  testid = "call-cta",
  variant = "outline",
  className = "",
}) => {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[background-color,color,transform,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98]";
  const styles =
    variant === "solid"
      ? "bg-gold text-charcoal hover:bg-goldDark"
      : "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream";
  return (
    <a
      data-testid={testid}
      href={TEL_URL}
      className={`${base} ${styles} ${className}`}
    >
      <Phone className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-12" />
      {label}
    </a>
  );
};
