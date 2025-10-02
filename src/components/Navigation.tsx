import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between backdrop-blur-sm bg-card/50 rounded-2xl border border-border px-6 py-4 shadow-lg">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary tracking-wider">
             <img
                  src="https://i.imghippo.com/files/wda3783ouk.png"
                  alt="Portfolio Hero"
                  className="w-10 h-auto object-cover"
                />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="font-semibold px-6">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 backdrop-blur-sm bg-card/95 rounded-2xl border border-border p-6 shadow-lg animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="font-semibold mt-2">Hire Me</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
