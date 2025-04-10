import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Github, LinkIcon } from 'lucide-react'
import Link from 'next/link'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Index Elevators Landing page",
      description: "A modern landing page for Index Elevators",
      image: "/index-logo.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/Ravikumarsharma07/index-elevators",
      demo: "https://indexelevators.in/"
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
      image: "/portfolio-ravi.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/Ravikumarsharma07/portfolio",
      demo: "https://ravi-kr-sharma.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30">
      <div className="container px-6 md:px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-gradient-to-br from-blue-900/50  via-pink-500/20 to-purple-700/40 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 opacity-70 group-hover:opacity-90 transition-all duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[17px] sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[14px] sm:text-[16px] text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link target='_blank' href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link target='_blank' href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkIcon className="h-5 w-5" />
                    </Link>
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