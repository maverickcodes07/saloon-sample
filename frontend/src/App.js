import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { TrustStrip } from "@/components/salon/TrustStrip";
import { About } from "@/components/salon/About";
import { Marquee } from "@/components/salon/Marquee";
import { Services } from "@/components/salon/Services";
import { Results } from "@/components/salon/Results";
import { WhyChooseUs } from "@/components/salon/WhyChooseUs";
import { Gallery } from "@/components/salon/Gallery";
import { InstagramFeed } from "@/components/salon/InstagramFeed";
import { Testimonials } from "@/components/salon/Testimonials";
import { Contact } from "@/components/salon/Contact";
import { Footer } from "@/components/salon/Footer";
import { FloatingActions } from "@/components/salon/FloatingActions";

function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App min-h-screen bg-cream font-sans text-charcoal antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Marquee />
        <Services />
        <Results />
        <WhyChooseUs />
        <Gallery />
        <InstagramFeed />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
