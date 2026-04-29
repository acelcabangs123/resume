'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I&apos;m open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Email */}
          <motion.a
            href="mailto:russellcabang3@gmail.com"
            whileHover={{ y: -5 }}
            className="group p-6 rounded-lg border border-border bg-card hover:bg-primary/5 transition-colors text-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex justify-center mb-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail size={28} className="text-primary" />
              </div>
            </motion.div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-foreground/60">russellcabang3@gmail.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+639957439001"
            whileHover={{ y: -5 }}
            className="group p-6 rounded-lg border border-border bg-card hover:bg-primary/5 transition-colors text-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex justify-center mb-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone size={28} className="text-primary" />
              </div>
            </motion.div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-foreground/60">+63 9957439001</p>
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group p-6 rounded-lg border border-border bg-card hover:bg-primary/5 transition-colors text-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex justify-center mb-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MapPin size={28} className="text-primary" />
              </div>
            </motion.div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-foreground/60">Quezon City, Philippines</p>
          </motion.div>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.a
            href="https://portfolio-russell-ashy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            Portfolio
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/50 border-t border-border pt-8"
        >
          <p>
            &copy; {new Date().getFullYear()} Russell C. Cabang. All rights reserved.
          </p>
          <p className="mt-2">Crafted with care using React, Next.js, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
