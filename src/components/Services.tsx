import { Code, Palette, Smartphone, Zap } from "lucide-react";

import { useReveal } from "@/hooks/useReveal";

const Services = () => {
  const { elementRef, revealed } = useReveal();

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that delight users and drive engagement.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant web applications with modern technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Designing seamless mobile experiences that work flawlessly across all devices.",
    },
    {
      icon: Zap,
      title: "Brand Identity",
      description: "Crafting unique brand identities that resonate with your target audience.",
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            My <span className="text-primary text-glow font-black">Services</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            Delivering excellence through innovative design and development solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(24_100%_50%/0.15)] hover-lift ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
