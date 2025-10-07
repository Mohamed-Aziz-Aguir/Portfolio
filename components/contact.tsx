import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohamedaziz.aguir@outlook.com",
      href: "mailto:mohamedaziz.aguir@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 93 236 576",
      href: "tel:+21693236576",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Monastir, Tunisia",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "Mohamed-Aziz-Aguir",
      href: "https://github.com/Mohamed-Aziz-Aguir",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohamedazizaguir",
      href: "https://www.linkedin.com/in/mohamedazizaguir",
    },
    {
      icon: ExternalLink,
      label: "TryHackMe",
      value: "MohamedAziz.Aguir",
      href: "https://tryhackme.com/p/MohamedAziz.Aguir",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration or have a project in mind? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border space-y-6">
              <h3 className="text-xl font-bold text-foreground">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to opportunities in cybersecurity, SOC operations, threat intelligence, and security automation.
              Let's build something secure together.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:mohamedaziz.aguir@outlook.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamed Aziz Aguir. Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  )
}
