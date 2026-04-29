'use client'

import { motion } from 'framer-motion'
import { FadeInSection } from '../animations/FadeInSection'
import { HoverCard } from '../animations/HoverCard'

const experiences = [
  {
    title: 'Freelance Virtual Assistant / Data Support',
    company: 'Self-employed',
    period: '2024 - Present',
    description:
      'Manage daily trackers for leads, booked calls, ad spend, and sales data. Update CRM and Airtable records and ensure data accuracy. Perform research, data entry, and admin tasks to support daily operations.',
    highlights: [
      'Manage daily trackers for leads, booked calls, ad spend, and sales data',
      'Update CRM and Airtable records and ensure data accuracy',
      'Perform research, data entry, and admin tasks to support daily operations',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Intellismart Technology Inc.',
    period: '2023 - 2024',
    description:
      'Maintain and enhance HRIS system and employee management tools. Build and update reports using Crystal Reports. Work with C#, MySQL, and MSSQL databases.',
    highlights: [
      'Maintain and enhance HRIS system and employee management tools',
      'Build and update reports using Crystal Reports',
      'Work with C#, MySQL, and MSSQL databases',
      'Troubleshoot issues and provide technical support to end users',
    ],
  },
  {
    title: 'TUA Web Developer Intern',
    company: 'Trinity University of Asia',
    period: '2022',
    description:
      'Assisted in developing and maintaining internal systems. Worked with React/JS, JavaScript, PHP, and SQL. Collaborated with the team to fix bugs and improve features.',
    highlights: [
      'Assisted in developing and maintaining internal systems',
      'Worked with React/JS, JavaScript, PHP, and SQL',
      'Collaborated with the team to fix bugs and improve features',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            A journey through diverse roles and growing expertise
          </motion.p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <HoverCard key={exp.company} delay={index * 0.1}>
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-foreground/60 text-sm sm:text-base mt-2 sm:mt-0 font-medium">
                    {exp.period}
                  </span>
                </motion.div>

                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex gap-3 text-foreground/60 text-sm"
                    >
                      <span className="text-primary font-bold mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </HoverCard>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
