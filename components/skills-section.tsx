"use client";
import { Code2, Server, Wrench } from "lucide-react";
import { motion } from "motion/react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 strokeWidth={1.7} className="p-3 rounded-full h-14 overflow-visible w-[50px] bg-gradient-to-tr from-blue-900/50 via-pink-500/20  to-purple-700/60 text-secondary-foreground/40" />,
      skills: [
        { name: "Next.js", level: 80 },
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind", level: 90 },
        { name: "Framer Motion", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Shadcn", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: <Server strokeWidth={1.7} className="p-3 rounded-full h-14 w-[50px] overflow-visible bg-gradient-to-tr from-blue-900/50 via-pink-500/20  to-purple-700/60 text-secondary-foreground/40" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Mongodb", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "NextAuth", level: 80 },
        { name: "JWT", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      icon: (
        <Wrench strokeWidth={1.5} className="p-2 rounded-full h-14 w-[50px] bg-gradient-to-tr from-blue-900/50 via-pink-500/20  to-purple-700/60 text-secondary-foreground/40" />
      ),
      skills: [
        { name: "Git", level: 90 },
        { name: "Github", level: 70 },
        { name: "Vercel", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 padding-x bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-12">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="relative pt-16 max-sm:pb-10 grid grid-cols-1 justify-items-start gap-4"
          >
            {/* vertical bar of skills */}
            <div className="absolute left-[43%] md:left-[40%] lg:left-[45%] top-0 h-full flex-center-col ">
              {category.icon}
              <div className="h-full w-[1px] md:w-[2px] bg-blue-900/50 bg-gradient-to-tr from-blue-900/50 via-pink-500/20  to-purple-700/60"></div>
            </div>

            {category.skills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className={`flex relative items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4 ${skillIndex % 2 !== 0 ? "justify-start pl-[12%] sm:pl-[100px] md:pl-[0px] lg:pl-[30px] xl:pl-[60px]" : "pl-[60%] sm:pl-[60%] md:pl-[52%] lg:pl-[60%]"} w-full`}
              >
                <div className="h-2 w-2 bg-gray-500 dark:bg-emerald-600 rounded-full"></div>
                <motion.div
                  key={skill.name}
                  transition={{ duration: 0.8, delay: skillIndex * 0.3 }}
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: [0, 0, 1] }}
                  viewport={{ once: true }}
                  className="w-max border-blue-600 shadow-[0_0_4px] hover:shadow-[0_0_5px] shadow-purple-400 rounded-xl bg-gradient-reverse"
                >
                  <p className="text-sm sm:text-[15px] text-nowrap p-2 font-medium dark:text-muted-foreground/70 text-secondary-foreground/70">
                    {skill.name}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* animated cards of skills translating from left to right */}
      {/* <section className="flex flex-col gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex items-start flex-col ">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 font-mono dark:text-muted-foreground text-secondary-foreground">
                {category.title}
              </h3>
              <div className="flex gap-3 sm:gap-6 w-full flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                    <motion.div
                    key={skill.name}
                    transition={{ duration: 1 , delay: skillIndex * 0.5 }}
                    initial={{ x:-50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: [0, 0, 1] }}
                    viewport={{ once: false }}
                    className="w-max p-2 h-[40px] md:h-[50px] lg:h-[50px]  border-blue-600 shadow-[0_0_4px] hover:shadow-[0_0_5px] shadow-purple-400 rounded-3xl bg-gradient-reverse">
                      <div className="text-emerald-500/80 h-full mb-2 flex-center gap-1 sm:gap-2">
                        <Code2 className="w-5 h-5 md:w-6 md:h-6" />
                        <p className="text-sm sm:text-[15px] font-medium dark:text-muted-foreground/70 text-secondary-foreground/70">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section> */}
    </section>
  );
};

export default SkillsSection;
