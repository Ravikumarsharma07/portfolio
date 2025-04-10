"use client";
import { motion } from "motion/react";

const AboutSection = () => {
  const journeyData = [
    {
      time: "2023",
      title: "Diploma in Mechanical Engineering",
      description:
        "After completing 10th grade, I took a bold step toward innovation by enrolling in Pusa Institute of Technology, where I pursued a diploma in Mechanical Engineering to dive deep into the world of machines, design, and practical problem-solving.",
    },
    {
      time: "2023-2024",
      title: "Started Web Development Journey",
      description:
        "I kickstarted my journey in web development by self-learning through YouTube tutorials, driven by curiosity and passion. To deepen my knowledge, I enrolled in a Udemy course—and today, I’ve grown into a MERN stack developer, building full-stack web applications from scratch.",
    },
    {
      time: "2024-Present",
      title: "Freelance MERN Stack Developer",
      description:
        "Currently working as a freelance MERN stack developer, I'm actively seeking internship opportunities to sharpen my skills, gain real-world experience, and contribute meaningfully to innovative tech projects. I'm passionate about learning and ready to make a lasting impact in the industry.",
    },
  ];

  return (
    <section
      id="about"
      className="flex-center-col py-20 padding-x bg-gradient-to-tr from-purple-700/40 via-pink-500/10 to-blue-900/30 "
    >
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      <section className="flex-center-col gap-10">
        {journeyData.map((item) => (
          <motion.div
            transition={{ duration: 0.5, ease: "backIn" }}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: [200, 50, 0], opacity: [0, 0.5, 1] }}
            viewport={{ once: true }}
            
            key={item.time}
            className="flex-center gap-4 md:gap-10 h-max max-sm:px-2"
          >
            <div className="h-[160px] md:h-[100px] w-[1px] md:w-[2px] rounded-full bg-purple-600">
              {" "}
            </div>
            <div className="h-max w-full shadow-xl dark:shadow-[#13112c] shadow-[#9590d4] font-sans p-2 sm:p-5 border border-[beige] rounded-2xl bg-gradient-to-tr from-blue-900/30 via-pink-500/10  to-purple-700/40">
              <h3 className="flex items-center gap-2 font-bold text-[16px] md:text-[18px] font-mono pb-1 dark:text-white/70 text-secondary-foreground/80">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                {item.time} <span className="font-normal">{item.title}</span>
              </h3>
              <p className="text-[14px] md:text-[16px] leading-6 pl-4 dark:text-white/60 text-secondary-foreground/70">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default AboutSection;
