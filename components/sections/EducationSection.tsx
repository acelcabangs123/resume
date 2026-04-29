'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { FadeInSection } from '../animations/FadeInSection'
import { HoverCard } from '../animations/HoverCard'

export function EducationSection() {
  const educationList = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Trinity University of Asia',
      year: '2022 - 2023',
      description: 'I transferred from Colegio De San Lorenzo to Trinity University of Asia, where I received a bachelor\'s degree in information technology as well as a cum laude.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Colegio De San Lorenzo',
      year: '2019 - 2021',
      description: 'For three years, I studied Computer Science at Colegio de San Lorenzo.',
    },
    {
      degree: 'Science Technology Engineer and Mathematics (STEM)',
      school: 'AMA University',
      year: '2017 - 2019',
      description: 'I attended AMA University for two years (Senior High School) and graduated.',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Academic foundation and continuous learning
          </motion.p>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <HoverCard key={index} delay={0.1 + index * 0.1}>
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 p-3 bg-primary/10 rounded-lg"
                  >
                    <GraduationCap size={28} className="text-primary" />
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {edu.school}
                    </p>
                    <p className="text-foreground/60 text-sm mt-2">{edu.year}</p>
                    <p className="text-foreground/70 mt-4">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </HoverCard>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
