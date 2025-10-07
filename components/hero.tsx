import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">Mohamed Aziz Aguir</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">Cybersecurity Engineer</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Specializing in SOC architecture, threat intelligence, and AI-driven defensive automation. Building secure
            systems and hunting threats.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Mohamed-Aziz-Aguir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/mohamedazizaguir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://tryhackme.com/p/MohamedAziz.Aguir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryHackMe"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27 3.273 3.273 0 0 1 3.27-3.27.625.625 0 0 0 .625-.624c0-3.028 2.458-5.486 5.486-5.486 3.028 0 5.486 2.458 5.486 5.486a.625.625 0 0 0 .625.625 3.273 3.273 0 0 1 3.27 3.27 3.273 3.273 0 0 1-3.27 3.27h-2.152a.625.625 0 1 0 0 1.25h2.152a4.525 4.525 0 0 0 4.52-4.52 4.525 4.525 0 0 0-4.107-4.5C16.509 2.285 13.871 0 10.705 0zm-2.5 7.5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75zm5 0a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
