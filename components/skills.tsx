import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Sword, Code, Server, Database, Network } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Blue Team",
      color: "text-blue-400",
      skills: [
        "SOC Design & SIEM",
        "Wazuh",
        "ELK Stack",
        "Splunk",
        "Incident Response",
        "Threat Hunting",
        "Log Correlation",
        "Digital Forensics",
        "Velociraptor",
        "TheHive",
        "Cortex",
        "Shuffle SOAR",
      ],
    },
    {
      icon: Sword,
      title: "Red Team",
      color: "text-red-400",
      skills: [
        "Vulnerability Assessment",
        "Network Exploitation",
        "Web Application Testing",
        "Post-Exploitation",
        "Penetration Testing",
        "Security Auditing",
      ],
    },
    {
      icon: Code,
      title: "Development",
      color: "text-green-400",
      skills: ["Python", "FastAPI", "REST APIs", "Docker", "Git", "Agile/Scrum", "CI/CD"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      color: "text-purple-400",
      skills: ["Elasticsearch", "Redis", "SQL", "Data Analysis", "AI/ML Integration", "Threat Intelligence"],
    },
    {
      icon: Network,
      title: "Infrastructure",
      color: "text-cyan-400",
      skills: [
        "pfSense",
        "Network Segmentation",
        "Ubuntu Server",
        "Zabbix Monitoring",
        "DMZ Configuration",
        "Firewall Management",
      ],
    },
    {
      icon: Server,
      title: "Security Tools",
      color: "text-orange-400",
      skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "OSINT Tools", "Threat Modeling"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Core Expertise</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive skill set spanning defensive security, offensive testing, and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-secondary rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-foreground">
                        {skill}
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
