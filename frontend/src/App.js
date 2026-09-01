import "@/App.css";
import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { TrustStrip } from "@/components/salon/TrustStrip";
import { About } from "@/components/salon/About";
import { Services } from "@/components/salon/Services";
import { WhyChooseUs } from "@/components/salon/WhyChooseUs";
import { Gallery } from "@/components/salon/Gallery";
import { Testimonials } from "@/components/salon/Testimonials";
import { Contact } from "@/components/salon/Contact";
import { Footer } from "@/components/salon/Footer";
import { FloatingActions } from "@/components/salon/FloatingActions";

function App() {
  return (
    <div className="App min-h-screen bg-cream font-sans text-charcoal antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
