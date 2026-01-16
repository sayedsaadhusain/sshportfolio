"use client"

import { motion } from "framer-motion"
import { Project } from "./projects"
import ProjectCard from "./ProjectCard"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <motion.div key={project.id || index} variants={item} custom={index}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}
