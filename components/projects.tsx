import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Cyber Threat Intelligence Platform",
      description:
        "Production-grade backend for threat collection, AI classification, and visualization. Built for automotive and general cybersecurity with automated CVE correlation.",
      technologies: ["FastAPI", "Elasticsearch", "Redis", "Docker", "AI/ML", "Python"],
      highlights: [
        "AI-based threat classification",
        "Automated CVE correlation",
        "Scalable data analytics",
        "Production-ready deployment",
      ],
      year: "2025",
      company: "Capgemini",
    },
    {
      title: "Full SOC Deployment",
      description:
        "Complete open-source Security Operations Center with network zoning, alert pipelines, and automated incident response workflows.",
      technologies: ["Wazuh", "TheHive", "Cortex", "Shuffle", "pfSense", "Velociraptor"],
      highlights: [
        "Multi-zone network architecture",
        "Automated alert enrichment",
        "Incident response automation",
        "Bal des Projets 2025 Winner",
      ],
      year: "2024-2025",
      company: "ESPRIT",
    },
    {
      title: "Automated Threat Response System",
      description:
        "Intelligent system for automatic blocking of malicious IPs with integrated threat intelligence enrichment.",
      technologies: ["Wazuh", "TheHive", "Cortex", "Python", "SOAR"],
      highlights: [
        "Auto-blocking workflows",
        "Threat intelligence integration",
        "Reduced triage time",
        "Real-time response",
      ],
      year: "2025",
      company: "ESPRIT",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Building production-ready security solutions and automation platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground text-balance">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {project.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary font-semibold">{project.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Key Features:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
