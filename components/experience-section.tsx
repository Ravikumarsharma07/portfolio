import { Card, CardContent } from './ui/card'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Corp",
      position: "Senior Developer",
      period: "2020 - Present",
      description: "Led development of multiple full-stack applications using modern technologies."
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Developed responsive web applications and improved user experiences."
    },
    {
      company: "Startup Inc",
      position: "Junior Developer",
      period: "2016 - 2018",
      description: "Collaborated on various web projects and learned modern development practices."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-tr from-purple-700/40 via-pink-500/10 to-blue-900/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection