"use client";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack", "Next.js", "Frontend"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-purple-700/40 via-pink-500/10 to-blue-900/30 pt-16"
    >
      <div className="container px-4 mx-auto text-center pb-10 flex flex-col items-center">
        <Image
          src="/profile.jpg"
          height={100}
          width={100}
          alt="profile"
          className=" mb-8 h-40 w-40 rounded-full animate-fade-in-tb"
        />
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-lr">
          Hi, I'm Ravi Kr Sharma
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-rl">
          A{" "}
          <span className="font-bold pl-2 w-max whitespace-nowrap">
            {text}
            <span className="animate-pulse duration-1000 font-extralight">
              |
            </span>
          </span>{" "}
          Developer passionate about building <br />
          engaging and functional web applications
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-bt">
          <a
            href="#contact"
            className="dark:bg-white bg-gradient-to-br from-purple-800/80 to-blue-900/60 text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="bg-secondary border border-purple-700  text-secondary-foreground px-4 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
