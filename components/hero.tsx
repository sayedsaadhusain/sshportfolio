"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white"
            >
              Hi, I'm <span className="text-blue-300">Sayed Saad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-200"
            >
              Full Stack Developer specializing in modern web technologies
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link href="#projects">
              <Button size="lg" className="min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white transition-all">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="min-w-[140px] border-white text-white hover:bg-white/10">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle code brackets */}
        <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none opacity-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-8xl font-mono"
          >
            {"<"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-8xl font-mono"
          >
            {"/>"}
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
