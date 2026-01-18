"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Twitter, MessageCircle, Instagram, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FloatingDock } from "@/components/ui/floating-dock"

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
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-900 relative"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-4xl relative z-20"
        >
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-4 text-center mb-10">
              <motion.div
                variants={item}
                className="inline-block"
              >
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 pb-2">
                  Let's Collaborate
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
              </motion.div>

              <motion.p
                variants={item}
                className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px] leading-relaxed"
              >
                Have a project in mind or just want to chat? <br className="hidden md:block" />
                I'm always open to discussing new ideas and opportunities.
              </motion.p>
            </div>

            <motion.div variants={item} className="flex flex-col items-center justify-center space-y-8">
              <p className="text-center max-w-[600px] mx-auto text-gray-400 font-light">
                Connect with me instantly on your favorite platform.
              </p>

              <div className="flex justify-center w-full">
                <FloatingDock
                  items={[
                    {
                      title: "Chat on WhatsApp",
                      icon: <MessageCircle className="h-full w-full text-green-400" />,
                      href: "https://wa.me/917266914546",
                    },
                    {
                      title: "Send an Email",
                      icon: <Mail className="h-full w-full text-red-400" />,
                      href: "mailto:sayedsaadhusain@gmail.com",
                    },
                    {
                      title: "Connect on LinkedIn",
                      icon: <Linkedin className="h-full w-full text-blue-500" />,
                      href: "https://www.linkedin.com/in/sayedsaadhusain/",
                    },
                    {
                      title: "View My Code",
                      icon: <Github className="h-full w-full text-white" />,
                      href: "https://github.com/sayedsaadhusain",
                    },
                    {
                      title: "Behind the Scenes",
                      icon: <Instagram className="h-full w-full text-pink-500" />,
                      href: "https://instagram.com/sayedsaadhusain",
                    },
                    {
                      title: "Tech Thoughts",
                      icon: <Twitter className="h-full w-full text-sky-400" />,
                      href: "https://x.com/sayedsaadhusain",
                    },
                    {
                      title: "Download Resume",
                      icon: <FileText className="h-full w-full text-yellow-400" />,
                      href: "/Saad_Resume.pdf",
                    },
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
