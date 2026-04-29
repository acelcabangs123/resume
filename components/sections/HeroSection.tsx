'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'
import { RotatingTitle } from '../animations/RotatingTitle'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
        >
          Russell C.{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Cabang
          </span>
        </motion.h1>

        {/* Rotating titles */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center">
            <RotatingTitle
              titles={['Web Developer', 'Data Analyst', 'Virtual Assistant']}
              className="text-2xl"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Detail-oriented and tech-savvy freelancer with experience in admin support, data
          analysis, web development, and tech consulting. Dedicated to delivering high-quality
          work that exceeds client expectations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="https://portfolio-russell-ashy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={20} />
            View Portfolio
          </motion.a>
          <motion.a
  href="/resume.pdf"
  download="resume.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
>
  <Download size={20} />
  Download Resume
</motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-foreground/70"
        >
          <a
            href="mailto:russellcabang3@gmail.com"
            className="hover:text-primary transition-colors"
          >
            russellcabang3@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+639957439001" className="hover:text-primary transition-colors">
            +63 9957439001
          </a>
          <span>•</span>
          <span>Quezon City, Philippines</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
