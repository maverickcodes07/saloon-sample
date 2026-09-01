import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { SALON, NAV_LINKS, SERVICES, WHATSAPP_URL, TEL_URL } from "@/data/salon";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Footer = () => (
  <footer className="bg-ink text-cream" data-testid="footer">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="font-serif text-3xl font-semibold">
            {SALON.name}
            <span className="text-gold">.</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {SALON.tagline} in Vadodara — hair, beauty, makeup and grooming, crafted with care.
          </p>
          <a
            href={SALON.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            {SALON.instagram}
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">Explore</h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id} className="text-sm text-cream/70">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">Visit</h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SALON.addressFull}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SALON.hoursNote} · {SALON.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={TEL_URL} className="transition-colors hover:text-gold">
                {SALON.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
            >
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream hover:text-charcoal"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-7 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {SALON.fullName}. All rights reserved.</span>
        <span>Waghodia Road, {SALON.city}, Gujarat</span>
      </div>
    </div>
  </footer>
);
