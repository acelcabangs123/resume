'use client'

import { motion } from 'framer-motion'
import {
  Sheet,
  Code,
  Database,
  BarChart3,
  Users,
  FileText,
  Calendar,
  Zap,
} from 'lucide-react'
import { FadeInSection } from '../animations/FadeInSection'
import { AnimatedProgressBar } from '../animations/AnimatedProgressBar'
import { HoverCard } from '../animations/HoverCard'

const skillCategories = [
  {
    name: 'Core Skills',
    icon: Zap,
    skills: [
      { name: 'Google Sheets & Excel', percentage: 95 },
      { name: 'Lead Generation & Research', percentage: 90 },
      { name: 'Dashboard & Reporting', percentage: 88 },
      { name: 'Web Development', percentage: 85 },
      { name: 'CRM & Data Management', percentage: 82 },
      { name: 'Admin Support & Scheduling', percentage: 90 },
    ],
  },
]

const skillTags = [
  { name: 'Google Sheets', icon: Sheet },
  { name: 'Lead Generation', icon: BarChart3 },
  { name: 'Data Analysis', icon: Database },
  { name: 'Web Development', icon: Code },
  { name: 'CRM', icon: Users },
  { name: 'Reporting', icon: FileText },
  { name: 'Admin Support', icon: Calendar },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical and professional capabilities
          </motion.p>
        </div>

        {/* Progress bars */}
        <div className="mb-16 bg-background/50 backdrop-blur rounded-xl p-8 border border-border">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
              >
                <category.icon size={24} className="text-primary" />
                {category.name}
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <AnimatedProgressBar
                    key={skill.name}
                    label={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill tags */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Tools & Technologies
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
          >
            {skillTags.map((skill, index) => (
              <HoverCard key={skill.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 p-4 cursor-pointer"
                >
                  <skill.icon size={20} className="text-primary" />
                  <span className="font-medium text-foreground text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </FadeInSection>
    </section>
  )
}
