import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Cyber Threat Intelligence Platform Developer",
      company: "Capgemini Engineering Tunisia",
      location: "Tunis, Tunisia (Hybrid)",
      period: "Jun 2025 – Sep 2025",
      type: "Internship",
      description: [
        "Designed and developed a Cyber Threat Intelligence (CTI) Platform for automotive and general cybersecurity",
        "Built a FastAPI backend integrated with Elasticsearch (v8.13.4), Redis, and Docker for scalable data analytics",
        "Implemented AI-based threat classification and similarity search for automated CVE correlation",
        "Deployed on Ubuntu 24.04 in a Dockerized production-ready environment; followed Agile practices",
      ],
      technologies: ["FastAPI", "Elasticsearch", "Redis", "Docker", "Python", "AI/ML"],
    },
    {
      title: "SOC Architecture & Automation Project",
      company: "ESPRIT",
      location: "Tunis, Tunisia",
      period: "Nov 2024 – Jun 2025",
      type: "Academic Project - Bal des Projets 2025 Winner",
      description: [
        "Built a complete open-source SOC using Wazuh, TheHive, Cortex, Shuffle, Velociraptor, and Zabbix",
        "Configured pfSense for segmented zones (DMZ, Honeynet, LAN, SOC) and created alert pipelines",
        "Automated incident response workflows and integrated analyzers for ticket enrichment",
      ],
      technologies: ["Wazuh", "TheHive", "Cortex", "Shuffle", "pfSense", "Velociraptor"],
    },
    {
      title: "Automated Incident Response Lab",
      company: "ESPRIT",
      location: "Tunis, Tunisia",
      period: "Jan 2025 – Jun 2025",
      type: "Apprenticeship",
      description: [
        "Implemented auto-blocking workflows for malicious IPs triggered by Wazuh alerts",
        "Integrated Cortex analyzers for enrichment in TheHive, reducing triage time significantly",
      ],
      technologies: ["Wazuh", "TheHive", "Cortex", "SOAR"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>{exp.company}</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/50 text-primary">
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
