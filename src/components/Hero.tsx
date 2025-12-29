import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "2+", label: "Experiences" },
    { value: "4+", label: "Project done" },
    { value: "7+", label: "Happy Clients" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/merin_nl/", target: "_blank" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/merin-nitharsan-6b6a23354/", target: "_blank" },
    { icon: Github, href: "https://github.com/NithaMerin", target: "_blank" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 relative group">
          {/* Decorative background pulse */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.1s' }}>Hi I am</p>
                <h1 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Merin Nitharsan
                </h1>
              </div>

              <h2 className="text-primary text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] animate-fade-in text-glow" style={{ animationDelay: '0.4s' }}>
                Fullstack <br /> Developer
              </h2>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target}
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-border bg-background/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Button size="lg" className="font-bold px-10 h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button size="lg" variant="outline" className="font-bold px-10 h-14 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
                  <a
                    href="https://drive.google.com/uc?id=1LxuZdiSIRnkxjISQ1Th0a7ESl22tFNHS&export=download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50 animate-fade-in" style={{ animationDelay: '1s' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1 group/stat">
                    <div className="text-primary text-4xl font-black tracking-tight group-hover/stat:scale-110 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest bg-primary/5 px-2 py-1 rounded inline-block">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in-right md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 group/image">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src="https://i.imghippo.com/files/TFL4091LUc.png"
                  alt="Portfolio Hero image"
                  className="w-full h-auto object-cover scale-105 group-hover/image:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
