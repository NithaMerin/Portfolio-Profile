import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

import { useReveal } from "@/hooks/useReveal";

const Contact = () => {
  const { elementRef, revealed } = useReveal();

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

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      // Initialize EmailJS with your Public Key
      emailjs.init("MnT854Tx2QXg1LFWi");

      const templateParams = {
        to_email: "nithamerin@gmail.com", // Map this to 'To Email' in dashboard
        to_name: "Nitha Merin",
        from_name: form.name, // Map this to {{from_name}} in template
        from_email: form.email, // Map this to {{from_email}} in template
        name: form.name,
        email: form.email,
        subject: form.subject, // Map this to {{subject}} in template
        message: form.message, // Map this to {{message}} in template
        reply_to: form.email, // Map this to 'Reply-To' in dashboard
      };

      await emailjs.send("service_zb5ytd5", "template_sk774qd", templateParams);

      setResult({ type: "success", message: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setResult({ type: "error", message: "Oops! Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl w-full relative z-10" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Get In <span className="text-primary text-glow font-black">Touch</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-10 transition-all duration-1000 delay-200 ${revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                Contact Information
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-500 shadow-sm border border-primary/10">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1.5 px-2 py-0.5 bg-secondary/50 rounded inline-block">
                        {info.label}
                      </div>
                      <div className="text-foreground text-lg font-bold tracking-tight">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 border-l-4 border-l-primary">
              <h4 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                Let's Create Something Great
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${revealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6 glass-card p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-700" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-foreground font-bold tracking-tight px-1" htmlFor="name">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-background/30 border-border/50 h-14 rounded-xl focus:border-primary/50 transition-all duration-300 font-medium"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-foreground font-bold tracking-tight px-1" htmlFor="email">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/30 border-border/50 h-14 rounded-xl focus:border-primary/50 transition-all duration-300 font-medium"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-foreground font-bold tracking-tight px-1" htmlFor="subject">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="bg-background/30 border-border/50 h-14 rounded-xl focus:border-primary/50 transition-all duration-300 font-medium"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-foreground font-bold tracking-tight px-1" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="bg-background/30 border-border/50 min-h-[160px] rounded-xl focus:border-primary/50 transition-all duration-300 font-medium resize-none p-4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button size="lg" className="w-full font-black h-14 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {result && (
                <div
                  className={`text-center mt-4 p-4 rounded-xl font-bold animate-fade-in ${result.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                >
                  {result.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
