"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-3xl space-y-10"
        >
          <div className="space-y-2 text-center">
            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={item}
              className="text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]"
            >
              Have a project in mind? Let's work together!
            </motion.p>
          </div>

          <motion.div variants={item} className="flex flex-col items-center justify-center space-y-4">
            <p className="text-center max-w-[600px] mx-auto text-gray-200">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some
              creative attention or if you're looking to hire, feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-all"
              >
                <Link href="mailto:sayedsaadhusain@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+917266914546">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 7266914546
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white/20 text-white">
              <Link
                href="https://github.com/sayedsaadhusain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white/20 text-white">
              <Link
                href="https://www.linkedin.com/in/sayedsaadhusain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white/20 text-white">
              <Link href="https://x.com/sayedsaadhusain" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
