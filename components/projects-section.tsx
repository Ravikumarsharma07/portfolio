import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Github, Link } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Index Elevators Landing page",
      description: "A modern landing page for Index Elevators",
      image: "/index-logo.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/Ravikumarsharma07/index-elevators",
      demo: "https://index-elevators.vercel.app/"
    },
    {
      title: "Xlsx To Json Converter",
      description: "A simple app to convert xlsx to json",
      image: "/xlsx.png",
      tags: ["React", "Javascript", "Tailwind"],
      github: "https://github.com/Ravikumarsharma07/xlsx-frontend",
      demo: "https://xlsx-frontend.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with dark mode and animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <Link className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection