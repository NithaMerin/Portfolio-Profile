import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "2+", label: "Experiences" },
    { value: "6+", label: "Project done" },
    { value: "10+", label: "Happy Clients" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/merin_nl/", target: "_blank"},
    { icon: Linkedin, href: "https://www.linkedin.com/in/merin-nitharsan-6b6a23354/", target: "_blank" },
    { icon: Github, href: "https://github.com/NithaMerin", target: "_blank" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-24">
      <div className="max-w-7xl w-full">
        <div className="backdrop-blur-sm bg-card/30 rounded-3xl border-2 border-border p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg">Hi I am</p>
                <h1 className="text-foreground text-3xl md:text-4xl font-semibold">
                  Merin Nitharsan
                </h1>
              </div>

              <h2 className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Fullstack Developer
              </h2>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target} 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="font-semibold px-8">
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  <a href="https://drive.google.com/uc?export=download&id=1mAv6p0TTD1DoWn0q0Zb4qTstKwcPBOgf">Download CV</a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-primary text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://i.imghippo.com/files/ykYe7077QOM.png"
                  alt="Portfolio Hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
