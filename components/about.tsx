import { Card } from "@/components/ui/card"
import { Award, Target, Zap } from "lucide-react"

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Bal des Projets 2025",
      description: "Excellence & Innovation Award",
    },
    {
      icon: Target,
      title: "CTI Platform",
      description: "Production-ready threat analysis for Capgemini",
    },
    {
      icon: Zap,
      title: "SOC Automation",
      description: "Reduced incident triage time significantly",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cybersecurity engineering student at ESPRIT, specializing in SOC architecture, threat intelligence, and
                AI-driven defensive automation. I blend Red & Blue team methodologies to improve defender readiness and
                build scalable security solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing an Engineering degree in Information Technology with a focus on Cybersecurity
                (equivalent to Master's degree, Bologna framework / MQF Level 7). Passionate about building
                production-ready security platforms and automating incident response workflows.
              </p>
            </div>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
