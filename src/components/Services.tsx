import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Services = () => {
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
    <section id="services" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence through innovative design and development solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.2)] animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
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
