'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface RotatingTitleProps {
  titles: string[]
  className?: string
}

export function RotatingTitle({ titles, className = '' }: RotatingTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <div className={`relative h-10 flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <span className="text-primary font-semibold text-2xl">
            {titles[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
