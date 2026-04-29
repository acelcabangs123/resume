'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { FadeInSection } from '../animations/FadeInSection'
import { HoverCard } from '../animations/HoverCard'
import { useState } from 'react'

const projects = [
  {
    title: 'Frontend Dashboard Suite',
    description:
      'Created responsive business dashboards for tracking KPIs, leads, calls, revenue, and performance metrics using modern frontend tools.',
    tech: ['React', 'Next', 'Tailwind', 'Charts', 'UI/UX'],
    highlights: [
      'Interactive charts',
      'Real-time metrics',
      'Mobile responsive',
      'Clean UI design',
    ],
  },
  {
    title: 'Platform Mobile App',
    description:
      'Worked on a React Native mobile app with offline capabilities. Offered uploads, GPS location tracking, and Admin dashboard systems for managing submissions.',
    tech: ['React Native', 'JavaScript', 'Mobile Development'],
    highlights: ['Offline functionality', 'GPS integration', 'Admin system'],
  },
  {
    title: 'Internal Systems & Reports',
    description:
      'Developed and maintained internal systems and reports using Crystal Reports, MySQL, and MSSQL. Provided technical support and bug fixes for enhanced system performance.',
    tech: ['Crystal Reports', 'MySQL', 'MSSQL', 'PHP'],
    highlights: ['System maintenance', 'Report generation', 'Database optimization'],
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my skills and expertise
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <HoverCard key={project.title} delay={index * 0.1}>
              <motion.div
                className="h-full flex flex-col p-6 sm:p-8 relative overflow-hidden"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0.6 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0.6,
                        }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-foreground/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </motion.p>
                    ))}
                  </div>

                  {/* Buttons */}
                  {/* <motion.div
                    className="flex gap-3 mt-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      <ArrowRight size={16} />
                      Learn More
                    </motion.button>
                  </motion.div> */}
                </div>
              </motion.div>
            </HoverCard>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
