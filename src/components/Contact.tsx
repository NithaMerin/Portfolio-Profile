import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      await emailjs.send(
        "service_zb5ytd5",
        "template_sk774qd",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "MnT854Tx2QXg1LFWi"
      );
      setResult({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setResult({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
              <div>
                <label className="text-foreground font-medium mb-2 block" htmlFor="name">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="bg-background/50"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block" htmlFor="email">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block" htmlFor="subject">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="bg-background/50"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-foreground font-medium mb-2 block" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="bg-background/50 min-h-[150px]"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button size="lg" className="w-full font-semibold" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {result && (
                <div
                  className={`text-center mt-2 font-medium ${
                    result.type === "success" ? "text-green-600" : "text-red-600"
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
