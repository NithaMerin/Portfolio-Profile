import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Animated Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          src="/logo.png"
          alt="Background Logo"
          className="w-[80vw] md:w-[60vw] h-auto object-contain animate-blink opacity-5 grayscale"
        />
      </div>

      <div className="relative z-50">
        <Navigation />
      </div>
      <div className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
