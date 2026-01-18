"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision className="w-full min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Open to New Opportunities
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl/none text-white drop-shadow-xl"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Sayed Saad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-lg md:text-2xl text-gray-300 drop-shadow-md font-light"
            >
              Building <span className="font-semibold text-blue-200">exceptional</span> digital experiences with modern technology.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link href="#projects">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 z-20 relative text-lg">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="h-12 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm z-20 relative text-lg min-w-[140px]">
                Contact Me
              </Button>
            </Link>
            <a href="/Saad_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="z-20 relative">
              <Button variant="outline" size="lg" className="h-12 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg min-w-[140px]">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Subtle code brackets */}
        <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none opacity-10 top-1/2 -translate-y-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-8xl font-mono hidden md:block"
          >
            {"<"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-8xl font-mono hidden md:block"
          >
            {"/>"}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
    </BackgroundBeamsWithCollision>
  )
}
