import { Award, Coffee, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
    },
    {
      icon: Coffee,
      value: "500+",
      label: "Coffee Cups",
    },
    {
      icon: Users,
      value: "80+",
      label: "Satisfied Clients",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate UI/UX designer with over 5 years of experience in creating 
              beautiful and functional digital experiences. My approach combines creativity 
              with user-centered design principles to deliver solutions that not only look 
              great but also solve real problems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe that great design is about more than just aesthetics—it's about 
              creating meaningful connections between users and products. Every project is 
              an opportunity to push boundaries and create something extraordinary.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Core Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">UI/UX Design</span>
                    <span className="text-primary font-semibold">95%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[95%] animate-fade-in" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Web Development</span>
                    <span className="text-primary font-semibold">90%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[90%] animate-fade-in" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Branding</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-[85%] animate-fade-in" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.2)]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">
                        {highlight.value}
                      </div>
                      <div className="text-muted-foreground">
                        {highlight.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
