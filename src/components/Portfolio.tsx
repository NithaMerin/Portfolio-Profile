import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useReveal } from "@/hooks/useReveal";

const Portfolio = () => {
  const { elementRef, revealed } = useReveal();

  const projects = [
    {
      title: "IMSESO",
      category: "Non-Profit",
      description: "A humanitarian platform focused on community empowerment, compassionate action, and non-violent communication.",
      image: "/projects/imseso_home.png",
      link: "https://imseso.org"
    },
    {
      title: "Choice For u",
      category: "E-Commerce Website",
      description: "Modern e-commerce solution with seamless user experience and product collections",
      image: "/projects/choice_for_u.png",
      link: "https://choice-for-u.vercel.app/"
    },
    {
      title: "DeutschLern AI",
      category: "AI Education",
      description: "Advanced AI-powered language learning platform for mastering German at all levels.",
      image: "/projects/deutschlern.png",
      link: "https://deutsch-learn.vercel.app/"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand identity system for tech startups and agencies",
      image: "/logos/nexwave.png",
      logos: ["/logos/nexwave.png", "/logos/stellar.png", "/logos/bloom.png", "/logos/guardly.png"]
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative">
      <div className="max-w-7xl w-full relative z-10" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            My <span className="text-primary text-glow font-black">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            A showcase of my recent projects and creative work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-card overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_50px_hsl(24_100%_50%/0.2)] ${revealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video relative overflow-hidden bg-background/5">
                {project.logos ? (
                  <div className="grid grid-cols-2 h-full gap-2 p-4 animate-fade-in">
                    {project.logos.map((logo, lIdx) => (
                      <div key={lIdx} className="relative aspect-square rounded-xl bg-card overflow-hidden border border-border/50 group/logo">
                        <img
                          src={logo}
                          alt={`Logo ${lIdx}`}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/logo:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </>
                )}

                <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="lg" className="font-bold shadow-xl border-2 border-white/20 backdrop-blur-sm">
                      View Project <ExternalLink className="ml-2" size={20} />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="text-primary text-xs font-black uppercase tracking-widest mb-3 bg-primary/5 px-3 py-1.5 rounded-full inline-block">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
