// Bloom Unisex Salon — real business data (single source of truth)

export const SALON = {
  name: "Bloom",
  fullName: "Bloom Unisex Salon",
  tagline: "Premium Unisex Salon",
  phoneDisplay: "+91 88491 03859",
  phoneRaw: "+918849103859",
  whatsappNumber: "918849103859",
  instagram: "@bloomsalon.bm",
  instagramUrl: "https://instagram.com/bloomsalon.bm",
  rating: "4.6",
  hours: "10:30 AM – 8:30 PM",
  hoursNote: "Open Daily",
  addressShort: "Waghodia Rd, Vadodara",
  addressFull:
    "1st Floor, G K Avenue, Zavernagar, Nr Uma Cross Roads, Waghodia Rd, Prabhat Nagar, Vadodara, Gujarat 390019",
  city: "Vadodara",
  mapsUrl:
    "https://www.google.com/maps/place/Bloom+Unisex+Salon/@22.3003847,73.2334702,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc54875ff91ad:0xd2ed656dee654ec9!8m2!3d22.3003847!4d73.2334702",
  mapsEmbed:
    "https://www.google.com/maps?q=Bloom+Unisex+Salon+Waghodia+Road+Vadodara&output=embed",
};

const WA_TEXT = encodeURIComponent(
  "Hi, I found your salon website and would like to know more about your services."
);

export const WHATSAPP_URL = `https://wa.me/${SALON.whatsappNumber}?text=${WA_TEXT}`;
export const TEL_URL = `tel:${SALON.phoneRaw}`;

// Real uploaded salon photography
const A =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_4828422f-dc95-447f-b337-13ccd3acd321/artifacts";

export const PHOTOS = {
  spaRoom: `${A}/4jjnp58y_AHRPTWnKYCy4ldkUpnsoOK0lyhOiqfd9GKjlS4YCnoJHvxOZ5po1ZNEm7IZBKUkdvcZosJBJiWfED12dlRgoxoE01KQMxR-xhL7J2zgkZtx5Bt0uOz5_wfZhsf1yEMu3wh7PIHy3qrhzQQw730-h1095-k-no.jpg`,
  pedicure: `${A}/8nbt32rm_AHRPTWnA0nqHJaL5jIspSYi6ySrG-mupgHwtr4LhFZUXFcOHibek490EzzRs6QKL1wh5QDVbCpVlAJ9pIGDSaqV2Nu3cX28RZbf3WaDMsJ-WDmEhJp42ff9GvL2496UCTM1WB1mMTI1lvgw1095-h730-k-no.jpg`,
  storefront: `${A}/qczxzxu2_AHRPTWmczLxXPrV1SPLEOQuotweiQyuVRsyJxHjXIGQspkBSxbZrytVUXvtPeskwKqnbX6yp3uDMa7aX1UkWvDtNXhi3Gy52GHYmTCTs-kHdvW1lKZ41aClcjwl1Wl4rjbXYXm8-SmiqZww928-h522-k-no.jpg`,
  interior: `${A}/sgizgujf_AHRPTWl-lKL3rytjsuHgjH77W0CRoUUsVn12pRxz1CxJz0vr1ZQWu3xS-qmfioSwI41VjI2ezR94wMpcbLu4blyxgDisudvhDpWLfeaqMZObYfQouFexoRAhOqBOXw-WqRCx2sNFPu6lsQw1095-h730-k-no.jpg`,
};

export const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export const TRUST = [
  { stat: "4.6", label: "Google Rating", sub: "Loved by our clients" },
  { stat: "7 Days", label: "Open Weekly", sub: "10:30 AM – 8:30 PM" },
  { stat: "Unisex", label: "For Everyone", sub: "Hair • Beauty • Grooming" },
  { stat: "Vadodara", label: "Waghodia Road", sub: "Easy to find & park" },
];

export const SERVICES = [
  {
    id: "hair",
    title: "Hair",
    blurb: "Precision cuts, restorative treatments & rich, dimensional colour.",
    items: [
      { name: "Haircut & Styling", desc: "Consultation-led cuts tailored to your face shape and texture." },
      { name: "Protein & Keratin", desc: "Reconstruction therapy for smoother, healthier, frizz-free hair." },
      { name: "Hair Botox", desc: "Deep repair for silky shine and lasting manageability." },
      { name: "Global Colour", desc: "Global tones, highlights and grey coverage with premium products." },
      { name: "Hair Spa", desc: "Nourishing scalp and hair rituals for softness and vitality." },
      { name: "Smoothening", desc: "Sleek, straight, effortlessly manageable finishes." },
    ],
  },
  {
    id: "beauty",
    title: "Beauty",
    blurb: "Skin, hands and feet care in a calm, spotlessly clean setting.",
    items: [
      { name: "Facials", desc: "Hydrating and brightening facials for a healthy, natural glow." },
      { name: "Manicure & Pedicure", desc: "Signature rose-petal soak with meticulous nail care." },
      { name: "Waxing & Threading", desc: "Gentle, precise finishing with hygienic single-use care." },
      { name: "Clean-up & De-Tan", desc: "Refreshing treatments to revive dull, tired skin." },
    ],
  },
  {
    id: "makeup",
    title: "Makeup",
    blurb: "Flawless, long-wear looks for weddings, parties and every occasion.",
    items: [
      { name: "Bridal Makeup", desc: "HD, camera-ready looks crafted for your big day." },
      { name: "Party & Event Glam", desc: "Contemporary makeup for engagements and celebrations." },
      { name: "Airbrush Finish", desc: "Weightless, seamless coverage that lasts all day." },
      { name: "Pre-Bridal Grooming", desc: "Curated packages to prepare skin and hair beautifully." },
    ],
  },
  {
    id: "grooming",
    title: "Grooming",
    blurb: "Sharp, modern men's grooming with a refined, relaxed experience.",
    items: [
      { name: "Beard Styling", desc: "Sculpting and shaping to complement your features." },
      { name: "Classic Shave", desc: "Traditional hot-towel shave for a smooth, clean finish." },
      { name: "Men's Haircut", desc: "Executive cuts with a precise, tailored finish." },
      { name: "Scalp & Hair Spa", desc: "Detoxifying rituals for a fresh, revitalised scalp." },
    ],
  },
];

export const WHY = [
  {
    title: "Experienced Professionals",
    desc: "A skilled team known by name — Arsh, Heli, Harun, Akash and more — trusted for consultation-led work.",
  },
  {
    title: "Spotless & Hygienic",
    desc: "Clean, well-maintained spaces and careful sanitisation that our clients consistently praise.",
  },
  {
    title: "Premium Products",
    desc: "Quality treatments and product lines chosen for real, lasting results.",
  },
  {
    title: "Personalised Care",
    desc: "Honest guidance and styles suggested for your hair, skin and personality.",
  },
];

export const GALLERY = [
  { src: PHOTOS.storefront, alt: "Bloom Salon storefront illuminated at night", span: "wide" },
  { src: PHOTOS.spaRoom, alt: "Private treatment and spa suite at Bloom Salon", span: "tall" },
  { src: PHOTOS.interior, alt: "Bright styling floor with signature coloured doors", span: "normal" },
  { src: PHOTOS.pedicure, alt: "Luxury pedicure suite with rose-petal soak", span: "normal" },
];

// Real, verified Google reviews (lightly trimmed, faithful to originals)
export const TESTIMONIALS = [
  {
    name: "Ritu Patel",
    rating: 5,
    service: "Protein Treatment & Global Colour",
    text: "I recently got a protein treatment and global colour for my white hair, and I'm absolutely impressed with the results! The team did an exceptional job. Special thanks to Arun and Helly — they were excellent in their work.",
  },
  {
    name: "Nirmal Jyotsana",
    rating: 5,
    service: "Haircut",
    text: "Had a great experience with Akash! He really understood exactly what I wanted and gave me a haircut that suited me perfectly. He was patient, professional, and paid attention to every detail. Super happy with the final look.",
  },
  {
    name: "Swati Pareek",
    rating: 5,
    service: "Hair Spa",
    text: "An absolutely luxurious and rejuvenating experience at Bloom Unisex Salon. The attention to detail, professionalism and overall service quality is truly exceptional. Special thanks to Heli for such a flawless and soothing hair spa.",
  },
  {
    name: "Shreya Sinha",
    rating: 5,
    service: "Shampoo & Blow Dry",
    text: "I had only gone in for a simple shampoo and blow dry, but the service was exceptional. Vidhi took such great care and her hair-washing technique was amazing — very gentle with absolutely no pulling. It made the whole experience extremely relaxing.",
  },
  {
    name: "Shivjeetsinh Rana",
    rating: 5,
    service: "Manicure & Pedicure",
    text: "Great experience! I recently visited Bloom Salon for a manicure and pedicure and was thoroughly impressed by the professionalism. The service was prompt and efficient without feeling rushed, and the staff followed excellent hygiene.",
  },
  {
    name: "Sricharana",
    rating: 5,
    service: "Protein Treatment",
    text: "An exceptional protein treatment experience at Bloom Unisex Salon. Harun provided a detailed and professional consultation, while Heli delivered the service with absolute precision and care.",
  },
];
