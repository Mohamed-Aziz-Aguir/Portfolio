import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

export function Certifications() {
  const certifications = [
    // To add a certification, uncomment and fill in:
    // {
    //   name: "Certification Name",
    //   issuer: "Issuing Organization",
    //   icon: Award,
    // },
  ]

  const languages = [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "Fluent", proficiency: 90 },
    { name: "French", level: "Intermediate", proficiency: 60 },
  ]

  return (
    <section id="certifications" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            {certifications.length === 0 ? (
              <Card className="p-6 bg-card border-border">
                <p className="text-muted-foreground text-center">Certifications coming soon...</p>
              </Card>
            ) : (
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <cert.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="font-bold text-foreground">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Languages</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-foreground">{lang.name}</h3>
                      </div>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${lang.proficiency}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-right">{lang.proficiency}%</p>
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
