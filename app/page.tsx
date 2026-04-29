'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { BackgroundDecorations } from '@/components/BackgroundDecorations'
import { HeroSection } from '@/components/sections/HeroSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="bg-background overflow-x-hidden">
      <BackgroundDecorations />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </main>
  )
}
