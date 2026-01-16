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
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-3 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-md"
            >
              Hi, I'm <span className="text-blue-300">Sayed Saad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-200 drop-shadow-sm"
            >
              Full Stack Developer specializing in modern web technologies
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <Link href="#projects">
              <Button size="lg" className="min-w-[140px] bg-blue-600 hover:bg-blue-700 text-white transition-all z-20 relative">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="min-w-[140px] bg-transparent border-white text-white hover:bg-white/10 z-20 relative">
                Contact Me
              </Button>
            </Link>
            <a href="/Saad_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="z-20 relative">
              <Button variant="outline" size="lg" className="min-w-[140px] bg-transparent border-white text-white hover:bg-white/10">
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
