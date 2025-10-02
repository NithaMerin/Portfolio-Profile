import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nithamerin@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 551 9863",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Murunkan, Mannar, Sri Lanka",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm mb-1">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Let's Create Something Great
              </h4>
              <p className="text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form className="space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
              <div>
                <label className="text-foreground font-medium mb-2 block">
                  Your Name
                </label>
                <Input placeholder="John Doe" className="bg-background/50" />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block">
                  Your Email
                </label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50" />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block">
                  Subject
                </label>
                <Input placeholder="Project Inquiry" className="bg-background/50" />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-background/50 min-h-[150px]"
                />
              </div>
              <Button size="lg" className="w-full font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
