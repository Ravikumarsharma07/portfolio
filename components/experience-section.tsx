"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
const projects = [
 {
    id: 2,
    title: "Jyoti Ambulance Service Landing Page",
    company: "jyotiambulance.in",
    period: "2025",
    description:
      "Built a highly responsive landing page for Jyoti Ambulance Service, focusing on providing easy access to emergency medical services. Implemented city-specific service pages and quick contact options.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SSG"],
    highlights: [
      "SSG for fast page loads and SEO benefits",
      "Optimized for mobile and desktop use",
      "Quick 'Call Now' button for immediate service access",
    ],
    color: "from-red-600/30 to-yellow-600/20",
    image: "/jyoti-ambulance.png",
  },
  {
    id: 1,
    title: "Index Elevators Landing Page",
    company: "indexelevators.in",
    period: "2025",
    description:
      "Designed and developed a modern, responsive landing page for a lifting and hoisting services company. Implemented a dynamic service catalog with product showcases, and lead generation forms.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Mobile-first responsive design",
      "SEO optimized for industrial keywords",
      "Interactive product catalog",
    ],
    color: "from-purple-600/30 to-pink-600/20",
    image: "/index-logo.png",
  },
  
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-tr from-purple-700/40 via-pink-500/10 to-blue-900/30 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-wide"
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-2 md:mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences through innovative frontend
            solutions and seamless user interfaces for diverse industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-[45%]"
              >
                  <Link
                      target="_blank"
                      href={`https://${project.company}`}
                    >
                <div className="relative group overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                </div>
                    </Link>
              </motion.div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center text-purple-500 dark:text-purple-300 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </div>

                <motion.h3
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                className="text-2xl md:text-3xl font-bold dark:text-white">
                  {project.title}
                </motion.h3>
              <Link target="_blank" href={`http://${project.company}`} >
                <p className="text-lg mt-4 text-purple-500 dark:text-purple-300 font-medium">
                  {project.company}
                </p>
              </Link>

                <motion.p
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                className="text-muted-foreground leading-relaxed text-[15px] md:text-lg">
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="w-max px-2 py-1 text-sm  border-blue-600 shadow-[0_0_3px] hover:shadow-[0_0_5px] shadow-purple-400 rounded-xl bg-gradient-reverse"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="dark:text-white font-semibold text-lg">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{duration: 0.6, delay: idx * 0.1 }}
                        className="flex items-center text-muted-foreground text-[15px] md:text-lg"
                      >
                        <div
                          className={`w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0`}
                        />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r to-purple-500/50 via-pink-500/20 from-cyan-400/40 backdrop-blur-md rounded-3xl p-4 max-sm:py-8 md:p-8 lg-p-12 border border-white/10"
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-10 sm:mb-8">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life with cutting-edge web
              development and stunning user experiences.
            </p>
            <a
              href="https://wa.me/918920878094?text=Hello%2C%20I%20am%20interested%20in%20developing%20a%20website.%3F"
              target="_blank"
            >
              <motion.button
                initial={{
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                }}
                className="bg-gradient-to-r to-purple-500 hover:scale-110  from-pink-500  text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
