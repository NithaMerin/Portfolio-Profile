import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";

const TechBubble = ({ icon, className, delay, size = "w-12 h-12", zIndex = "z-20" }: { icon: string; className: string; delay: string; size?: string; zIndex?: string }) => (
  <div
    className={`absolute ${className} ${size} ${zIndex} rounded-2xl glass-card flex items-center justify-center p-2.5 transition-all duration-500 hover:scale-125 hover:rotate-12 animate-float shadow-xl shadow-primary/10`}
    style={{ animationDelay: delay }}
  >
    <img src={icon} alt="tech icon" className="w-full h-full object-contain filter brightness-110" />
  </div>
);

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

  interface TechIcon {
    icon: string;
    className: string;
    delay: string;
    size?: string;
    zIndex?: string;
  }

  const techLogos: TechIcon[] = [
    // Floating over hero section
    { icon: "https://cdn.simpleicons.org/angular/DD0031", className: "top-4 -left-20", delay: "0s", size: "w-14 h-14" },
    { icon: "https://cdn.simpleicons.org/django/092E20", className: "top-4 -right-20", delay: "1.2s", size: "w-14 h-14" },

    // In front of profile image
    { icon: "https://cdn.simpleicons.org/nodedotjs/339933", className: "bottom-1/4 left-1/2 -ml-20", delay: "0.4s", zIndex: "z-30", size: "w-14 h-14" },
    { icon: "https://cdn.simpleicons.org/react/61DAFB", className: "top-1/4 left-10", delay: "1.5s", zIndex: "z-30", size: "w-16 h-16" },
    { icon: "https://cdn.simpleicons.org/python/3776AB", className: "bottom-1/4 right-10", delay: "0.8s", zIndex: "z-30", size: "w-14 h-14" },
    { icon: "https://cdn.simpleicons.org/supabase/3ECF8E", className: "top-10 left-10", delay: "2.2s", zIndex: "z-30", size: "w-12 h-12" },
    { icon: "https://cdn.simpleicons.org/postgresql/4169E1", className: "bottom-20 -left-8", delay: "3s", zIndex: "z-30", size: "w-14 h-14" },
    { icon: "https://cdn.simpleicons.org/graphql/E10098", className: "top-1/2 -right-10", delay: "0.5s", zIndex: "z-30", size: "w-14 h-14" },
    { icon: "https://cdn.simpleicons.org/figma/F24E1E", className: "bottom-10 right-10", delay: "1.8s", zIndex: "z-30", size: "w-12 h-12" },

    // Accents
    { icon: "https://cdn.simpleicons.org/n8n/FF6D5A", className: "top-4 right-1/3", delay: "2.5s", zIndex: "z-30", size: "w-10 h-10" },
    { icon: "https://cdn.simpleicons.org/mongodb/47A248", className: "bottom-4 left-1/3", delay: "0.2s", zIndex: "z-30", size: "w-10 h-10" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative group/hero overflow-hidden transition-all duration-700 hover:hero-glow">
          {/* Decorative background pulse */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none group-hover/hero:bg-primary/20 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none group-hover/hero:bg-primary/15 transition-colors duration-700 delay-150" />

          {/* Animated background lines or effects on hover */}
          <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-1000 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left group-hover/hero:translate-x-2 transition-transform duration-700">
              <div className="space-y-4">
                {/* Motto Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md animate-fade-in group/motto hover:border-primary/50 transition-colors"
                  style={{ animationDelay: '0.05s' }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/80 group-hover/motto:text-primary transition-colors bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_100%] animate-text-shimmer bg-clip-text">
                    Be Your Own Brand.
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-muted-foreground text-lg font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.1s' }}>Hi I am</p>
                  <h1 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight animate-fade-in group-hover/hero:text-glow transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                    Merin Nitharsan
                  </h1>
                </div>
              </div>

              <h2 className="text-primary text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] animate-fade-in text-glow group-hover/hero:scale-105 transition-transform duration-700 origin-left" style={{ animationDelay: '0.4s' }}>
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
            <div className="relative animate-fade-in-right md:block group/image-container">
              {/* Tech Bubbles */}
              {techLogos.map((logo, index) => (
                <TechBubble
                  key={index}
                  icon={logo.icon}
                  className={logo.className}
                  delay={logo.delay}
                  size={logo.size}
                  zIndex={logo.zIndex}
                />
              ))}

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover/image-container:scale-[1.02] group-hover/image-container:shadow-primary/20">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image-container:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src="https://i.imghippo.com/files/TFL4091LUc.png"
                  alt="Portfolio Hero image"
                  className="w-full h-auto object-cover scale-105 group-hover/image-container:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20" />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl animate-pulse group-hover/hero:bg-primary/40 transition-colors" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700 group-hover/hero:bg-secondary/40 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
