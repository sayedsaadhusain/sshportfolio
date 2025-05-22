"use client"

import { motion } from "framer-motion"

export default function About() {
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
    <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-background dot-pattern">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="space-y-2 text-center">
            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={item}
              className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]"
            >
              Learn more about my background and skills
            </motion.p>
          </div>
          <motion.div variants={item} className="space-y-4 px-4 sm:px-6 text-lg">
            <p>
              I'm a passionate developer with expertise in modern web technologies. I specialize in building responsive,
              user-friendly applications using React, Next.js, and other cutting-edge tools.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I create seamless experiences that
              solve real-world problems. I'm constantly learning and exploring new technologies to stay at the forefront
              of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community engagement.
            </p>
          </motion.div>
          <motion.div variants={item} className="space-y-4 px-4 sm:px-6">
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
                "GraphQL",
                "AWS",
              ].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
