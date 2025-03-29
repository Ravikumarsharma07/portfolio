import NavHeader from '@/components/nav-header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import ContactSection from '@/components/contact-section'

export default function Home()  {

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}