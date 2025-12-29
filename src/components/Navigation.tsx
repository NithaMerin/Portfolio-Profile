import { Button } from "@/components/ui/button";
import { Menu, X, Palette, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("24 100% 50%"); // Default orange
  const pickerRef = useRef<HTMLDivElement>(null);

  const colors = [
    { name: "Orange", value: "24 100% 50%" },
    { name: "Blue", value: "217 91% 60%" },
    { name: "Purple", value: "262 83% 58%" },
    { name: "Green", value: "142 71% 45%" },
    { name: "Pink", value: "330 81% 60%" },
    { name: "Cyan", value: "188 86% 53%" },
  ];

  useEffect(() => {
    const savedColor = localStorage.getItem("ui-primary-color");
    if (savedColor) {
      setActiveColor(savedColor);
      document.documentElement.style.setProperty("--primary-color", savedColor);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--primary-color", color);
    localStorage.setItem("ui-primary-color", color);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact" },
  ];

  const ColorPicker = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-3 ${mobile ? "mt-4" : ""}`}>
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => handleColorChange(color.value)}
          className={`w-7 h-7 rounded-full transition-all duration-300 hover:scale-125 border-2 ${activeColor === color.value ? "border-white scale-110 shadow-lg shadow-primary/20" : "border-white/10"
            }`}
          style={{ backgroundColor: `hsl(${color.value})` }}
          title={color.name}
        />
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-8 md:px-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between glass-card px-8 py-5 rounded-[2rem] shadow-2xl border-white/5 group ring-1 ring-white/10 hover:ring-primary/30 transition-all duration-500">
          {/* Logo */}
          <div className="relative group/logo cursor-pointer overflow-visible">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 scale-150" />
            <img
              src="/logo.png"
              alt="Portfolio Logo"
              className="w-14 h-auto object-cover rounded-xl shadow-lg relative z-10 transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-[5deg] group-hover/logo:border-primary/50 group-hover/logo:shadow-primary/20"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-bold text-sm uppercase tracking-widest relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Color Selector Dropdown */}
            <div className="relative" ref={pickerRef}>
              <button
                onClick={() => setIsPickerOpen(!isPickerOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 group/btn ${isPickerOpen
                  ? "bg-primary text-primary-foreground border-transparent shadow-lg shadow-primary/20 scale-105"
                  : "bg-white/5 border-white/10 text-foreground/70 hover:border-primary/50 hover:text-primary"
                  }`}
              >
                <Palette size={18} className={isPickerOpen ? "animate-spin-slow" : ""} />
                <span className="text-sm font-bold uppercase tracking-wider">Themes</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isPickerOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-[calc(100%+12px)] right-0 glass-card p-5 rounded-2xl min-w-[200px] border-white/10 shadow-3xl transition-all duration-500 origin-top-right ${isPickerOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                  }`}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-1">Choose Palette</p>
                <ColorPicker />
              </div>
            </div>

            <Button className="font-black px-8 h-12 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="text-foreground p-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 glass-card p-8 rounded-[2rem] shadow-2xl animate-fade-up-reveal ring-1 ring-white/10">
            <div className="flex flex-col gap-6">
              <div className="pb-6 border-b border-white/5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-black mb-4 px-1">Theme Color</p>
                <ColorPicker mobile />
              </div>
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-bold text-xl tracking-tight py-2 border-b border-white/5 last:border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="font-black mt-4 h-14 rounded-xl text-lg shadow-xl shadow-primary/20" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>Hire Me</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
