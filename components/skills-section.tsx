import Image from 'next/image'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", level: 80 },
        { name: "React", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 80 },
        { name: "NextAuth", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Mongodb", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ]

  // ################## 1.frontend 2.backend 3.tools >>>  small boxes containing specific skills and appearing one by one horizontally  ############

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <section className='flex flex-col gap-8'>
        {skillCategories.map((category, index) => (
          <div key={index} className=''>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-mono dark:text-muted-foreground text-secondary-foreground">{category.title}</h3>
            <div className='flex gap-10'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='h-20 w-20 border-blue-500 border-2 rounded-xl'>
                  <Image className='rounded-xl h-20 w-20' src={`/html.png`} alt={skill.name} width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
        ))}
        </section>
      </div>
    </section>
  )
}

export default SkillsSection