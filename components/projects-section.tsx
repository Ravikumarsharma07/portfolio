"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "HealMeal-AI",
    description: "AI-powered hospital food management system",
    image: "/healmeal-ai.png",
    tags: ["Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
    github: "https://github.com/Ravikumarsharma07/HealMeal-AI",
    demo: "https://heal-meal-ai.vercel.app/",
    category: "Full Stack App",
  },
  {
    title: "PillUp Clone",
    description: "Medication services landing page",
    image: "pillup-clone.png",
    tags: ["React.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Ravikumarsharma07/PillUp-Clone",
    demo: "https://pill-up-clone.vercel.app/",
    category: "Landing Page",
  },
  {
    title: "Xlsx To Json Converter",
    description: "A simple app to convert xlsx to json",
    image: "/xlsx.png",
    tags: ["React", "Javascript", "Tailwind"],
    github: "https://github.com/Ravikumarsharma07/xlsx-frontend",
    demo: "https://xlsx-frontend.vercel.app/",
    category: "Tool",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with dark mode and animations",
    image: "/portfolio-ravi.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Ravikumarsharma07/portfolio",
    demo: "https://ravi-kr-sharma.vercel.app/",
    category: "Portfolio",
  },
];
const ProjectsSection = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const prevFeatured = () => {
    setFeaturedIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextFeatured = () => {
    setFeaturedIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30"
    >
      <div className="container px-4 mx-auto">
        <div className="flex-center">
          <h2 className="w-max place-self-center text-3xl tracking-wide bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mb-12 text-center">
            Projects
          </h2>
        </div>

        <div className="max-w-[74rem] mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Project
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={prevFeatured}
                  className="p-2 dark:bg-white/10 bg-black/40 hover:bg-black/60 dark:hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextFeatured}
                  className="p-2 dark:bg-white/10 bg-black/40 hover:bg-black/60 dark:hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <motion.div
             initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
             className="w-full grid md:grid-cols-2 gap-2 md:gap-8 items-center  lg:ml-10">
              <div className="w-full hover:scale-[1.04] transition-all duration-300 overflow-hidden rounded-2xl">
                <Image
                  height={100}
                  width={100}
                  src={projects[featuredIndex].image}
                  alt={projects[featuredIndex].title}
                  className="w-full h-64 md:h-96 object-cover hover:scale-110 shadow-2xl transition-all duration-300"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="max-md:absolute top-[63%] right-2 px-3 py-1 bg-purple-500/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                    {projects[featuredIndex].category}
                  </span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-bold dark:text-white"
                >
                  {projects[featuredIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-[16px] md:text-lg leading-relaxed"
                >
                  {projects[featuredIndex].description}
                </motion.p>
                <div className="flex flex-wrap gap-3">
                  {projects[featuredIndex].tags.map((tag, tagIndex) => (
                    <motion.span
                      initial={{ opacity: 0, x: -30 * (tagIndex + 1) }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: (1 + tagIndex) * 0.3,
                      }}
                      viewport={{ once: true }}
                      key={tagIndex}
                      className="w-max px-1 md:px-3 py-1 text-[15px] md:text-lg border-blue-600 shadow-[0_0_3px] hover:shadow-[0_0_5px] shadow-purple-400 rounded-xl bg-gradient-reverse"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                className="flex gap-4 pt-2">
                  <a
                    href={projects[featuredIndex].github}
                    className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white dark:bg-white/20 dark:hover:bg-white/40 hover:bg-white/40 rounded-lg dark:text-white transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a
                    href={projects[featuredIndex].demo}
                    className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r to-purple-500 hover:scale-110  from-pink-500  text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
