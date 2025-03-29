"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const NavHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false)

  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      console.log(hash);
      
      setHash(window.location.hash.substring(1));
    }
    updateHash();

    window.addEventListener("hashchange", updateHash);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [hash]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("active", window.location.hash.substring(1));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleClick = () => {
    setIsNavbarActive(prev => !prev)
  }
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/60 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home"  className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>


        {/* $$$$$$$$$$$$$$  navbar for small screens   $$$$$$$$$$$$$$$$$$$$$ */}

      <section className={`bg-gradient-to-tr bg-purple-700/60 dark:bg-background/90 backdrop-blur-xl shadow-2xl from-purple-700/60 via-pink-500/10 to-blue-900/80 transition-all duration-200 ease-linear absolute top-0 left-0 h-screen md:hidden z-50 overflow-hidden ${isNavbarActive ? "w-[264px] p-4 py-2" : "p-0 m-0 box-border w-[0px]"}`}>
      <div className="text-white flex items-center justify-between gap-1">
        <div className="flex items-center text-2xl">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </span>
        </div>
        <div className="text-5xl font-thin rotate-45 cursor-pointer" onClick={handleClick}>+</div>
      </div>
      <div className="flex flex-col pt-8 gap-2">
        {["Home", "About", "Experience", "Projects", "Contact"].map((link) => {
          const isActive =  hash == link.toLowerCase();
          return (
            <a
            onClick={handleClick}
              href={`#${link.toLowerCase()}`}
              key={link}
              className={cn(
                "text-white text-lg rounded-lg px-2 py-2 flex items-center gap-4",
                { "border-b-2 border-purple-950": isActive }
              )}
            >
              <p className="text-lg">{link}</p>
            </a>
          );
        })}
      </div>
    </section>


        <div className="flex justify-center items-center gap-3">
          <ThemeToggle />

          <Button
          onClick={handleClick}
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-200 scale-110 hover:scale-[1.17] hover:text-purple-700"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
