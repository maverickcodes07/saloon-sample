# Bloom Unisex Salon — Product Requirements (PRD)

## Original Problem Statement
Build a premium, conversion-focused, single-page marketing website for a salon. No login, no dashboard, no database, no booking system. Primary goal: showcase the salon beautifully and make it effortless to Call or WhatsApp. (Full master prompt provided by user, June 2026.)

## Business Data (real)
- Name: Bloom Unisex Salon, Waghodia Road, Vadodara, Gujarat 390019
- Phone / WhatsApp: +91 88491 03859
- Hours: Open daily 10:30 AM – 8:30 PM
- Google rating: 4.6★ · Instagram: @bloomsalon.bm
- Maps: Bloom Unisex Salon (lat 22.3003847, lng 73.2334702)

## Architecture
- Frontend-only React (CRA + craco), Tailwind CSS, framer-motion. No backend/DB used.
- Fonts: Cormorant Garamond (serif) + Plus Jakarta Sans (sans).
- Palette: warm cream #FAFAFA, sand #F4F1EA, charcoal #1C1C1C, muted gold #C5A059.
- Single source of data: `/app/frontend/src/data/salon.js`.
- Reusable components in `/app/frontend/src/components/salon/`.

## User Persona
Local Vadodara resident (any gender) looking for a trusted hair/beauty/grooming salon; wants to quickly judge quality and contact via Call or WhatsApp on mobile.

## Core Requirements (static)
- Sections: Navbar, Hero, Trust strip, About, Services (Hair/Beauty/Makeup/Grooming, no prices), Why Choose Us, Gallery (masonry + lightbox), Testimonials (real reviews), Contact/Location (embedded Google map + directions), Footer.
- Persistent CTAs: desktop floating WhatsApp button + mobile fixed Call | WhatsApp bar.
- Smooth scroll, subtle reveal animations, prefers-reduced-motion respected.
- Basic SEO: title, meta description, OG tags, JSON-LD LocalBusiness (HairSalon), robots.txt, sitemap.xml, semantic H1/H2, alt text.

## Implemented (2026-06 / Sep session date shown by tool)
- Full single-page site built and verified (compiles clean; sections screenshot-verified on desktop).
- Real uploaded salon photography used across hero, about, gallery.
- 6 real, verified Google reviews used verbatim (lightly trimmed): Ritu Patel, Nirmal Jyotsana, Swati Pareek, Shreya Sinha, Shivjeetsinh Rana, Sricharana.
- Call (tel:) and WhatsApp (wa.me with pre-filled message) wired everywhere.
- Interactive gallery lightbox with keyboard + arrow navigation.
- SEO files + structured data added.

## Backlog / Remaining (P1/P2)
- P1: Add more real reviews/photos as the salon supplies them.
- P2: Optional price list if provided; optional dedicated team/stylist section.
- P2: Replace preview canonical/OG URL with final custom domain on deploy.

## Notes
- No authentication, database, or backend — intentionally per scope.
- WhatsApp pre-filled text: "Hi, I found your salon website and would like to know more about your services."
