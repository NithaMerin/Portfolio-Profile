import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce solution with seamless user experience",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      description: "Intuitive banking app with focus on security and ease of use",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive dashboard for data analytics and visualization",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand identity system for tech startup",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and creative work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.2)] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  <Button variant="outline" size="lg">
                    View Project <ExternalLink className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
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
