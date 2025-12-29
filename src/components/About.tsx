import { Code2, Palette, Globe, Layers } from "lucide-react";

import { useReveal } from "@/hooks/useReveal";

const About = () => {
  const { elementRef, revealed } = useReveal();

  const highlights = [
    {
      icon: Code2,
      value: "Full Stack",
      label: "Development Focus",
    },
    {
      icon: Layers,
      value: "UI/UX",
      label: "Expertise & Design",
    },
    {
      icon: Palette,
      value: "Creative",
      label: "Content & Graphics",
    },
    {
      icon: Globe,
      value: "Scalable",
      label: "API Integrations",
    },
  ];

  const skills = [
    { name: "UI Development", value: 95 },
    { name: "API Integrations", value: 90 },
    { name: "Full Stack Tech", value: 85 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10" ref={elementRef}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                About <span className="text-primary text-glow font-black">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>

            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              I’m a full stack developer specializing in UI development and API integrations,
              with additional experience in graphic design and content creation.
              I enjoy building visually appealing, scalable applications with smooth
              user experiences.
            </p>

            <div className="space-y-8 pt-4">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-foreground font-bold tracking-tight text-lg">{skill.name}</span>
                      <span className="text-primary font-black text-xl">{skill.value}%</span>
                    </div>
                    <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-border/50">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                        style={{
                          width: revealed ? `${skill.value}%` : '0%',
                          transitionDelay: `${400 + index * 200}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite] w-[200px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`glass-card p-8 hover:border-primary/50 transition-all duration-700 hover-lift ${revealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 shadow-sm border border-primary/10">
                    <highlight.icon className="text-primary" size={36} />
                  </div>
                  <div>
                    <div className="text-5xl font-black text-primary mb-1 tracking-tight text-glow">
                      {highlight.value}
                    </div>
                    <div className="text-muted-foreground font-bold uppercase tracking-widest text-sm">
                      {highlight.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
