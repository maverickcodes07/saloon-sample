import { MapPin, Clock, Phone, Instagram, Navigation } from "lucide-react";
import { SALON } from "@/data/salon";
import { Reveal, Overline, WhatsAppButton, CallButton } from "@/components/salon/primitives";

const rows = [
  { Icon: MapPin, label: "Visit Us", value: SALON.addressFull },
  { Icon: Clock, label: "Opening Hours", value: `${SALON.hoursNote} · ${SALON.hours}` },
  { Icon: Phone, label: "Call Us", value: SALON.phoneDisplay },
  { Icon: Instagram, label: "Instagram", value: SALON.instagram, href: SALON.instagramUrl },
];

export const Contact = () => (
  <section id="contact" className="scroll-mt-24 bg-cream py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Overline>Get In Touch</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.06] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Ready for your <span className="italic text-gold">next look?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-textmuted sm:text-lg">
            Message or call us to plan your visit. We'll help you choose the perfect service and time.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton testid="contact-whatsapp-cta" />
            <CallButton testid="contact-call-cta" label={`Call ${SALON.phoneDisplay}`} />
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid overflow-hidden rounded-[3px] border border-borderline lg:grid-cols-2">
        <div className="bg-sand p-8 sm:p-12">
          <div className="space-y-8">
            {rows.map(({ Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-borderline bg-cream text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-textmuted">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block font-serif text-lg text-charcoal transition-colors hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="mt-1 max-w-xs font-serif text-lg leading-snug text-charcoal">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <a
            data-testid="get-directions-btn"
            href={SALON.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-gold hover:text-charcoal active:scale-[0.98]"
          >
            <Navigation className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
            Get Directions
          </a>
        </div>

        <div className="min-h-[340px] w-full lg:min-h-full">
          <iframe
            title="Bloom Unisex Salon location on Google Maps"
            data-testid="contact-map"
            src={SALON.mapsEmbed}
            className="h-full min-h-[340px] w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);
