import { Instagram, Linkedin, Dribbble, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
     { icon: Instagram, href: "https://www.instagram.com/merin_nl/", target: "_blank"},
    { icon: Linkedin, href: "https://www.linkedin.com/in/merin-nitharsan-6b6a23354/", target: "_blank" },
    { icon: Github, href: "https://github.com/NithaMerin", target: "_blank" },
  ];

  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-primary">
              <img
                  src="src/assets/logo.png"
                  alt="Portfolio Hero"
                  className="w-20 h-auto object-cover"
                />
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-lg border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Merin Nitharsan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
