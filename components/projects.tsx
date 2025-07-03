"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Dynamically import the ProjectsGrid component (SSR disabled)
const ProjectsGrid = dynamic(() => import("./ProjectsGrid"), { ssr: false })

export interface Project {
  id?: string
  title?: string
  description?: string
  techStack?: string
  gitHubLink?: string
  liveLink?: string
  screenshot1?: string
  screenshot2?: string
  screenshot3?: string
  [key: string]: any
}

const fallbackProjects: Project[] = [
  {
    id: "1",
    Title: "E-Commerce Platform",
    Description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    TechStack: "React, Next.js, Tailwind CSS, Stripe",
    GitHubLink: "https://github.com/username/ecommerce",
    LiveLink: "https://ecommerce-demo.vercel.app",
    Screenshot1: "/placeholder.svg?height=400&width=600",
    Screenshot2: "/placeholder.svg?height=400&width=600",
    Screenshot3: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    Title: "Task Management App",
    Description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
    TechStack: "TypeScript, React, Node.js, MongoDB",
    GitHubLink: "https://github.com/username/taskmanager",
    LiveLink: "https://taskmanager-demo.vercel.app",
    Screenshot1: "/placeholder.svg?height=400&width=600",
    Screenshot2: "/placeholder.svg?height=400&width=600",
    Screenshot3: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    Title: "Weather Dashboard",
    Description: "Real-time weather information dashboard with forecasts, maps, and location-based services.",
    TechStack: "JavaScript, React, OpenWeather API, Chart.js",
    GitHubLink: "https://github.com/username/weather",
    LiveLink: "https://weather-demo.vercel.app",
    Screenshot1: "/placeholder.svg?height=400&width=600",
    Screenshot2: "/placeholder.svg?height=400&width=600",
    Screenshot3: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.sheety.co/426094bd0b13567a6c990e63aff99e2e/projectApi/sheet1")

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`)
        }

        const data = await response.json()

        const projectsWithIds = data.sheet1.map((project: Project, index: number) => ({
          ...project,
          id: project.id || `project-${index}`,
        }))

        setProjects(projectsWithIds)
        setError(null)
      } catch (err) {
        console.error(err)
        setProjects(fallbackProjects)
        setError("Note: Using demo data. Connect your Google Sheets API for real data.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <div className="text-center mb-10 max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl gradient-text">Projects</h2>
          <p className="text-muted-foreground text-base md:text-xl">
            Showcasing my recent work
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p>Loading projects...</p>
            </div>
          </div>
        ) : error ? (
          <>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-600 max-w-2xl mx-auto mb-6 text-center">
              <p className="font-medium">{error}</p>
              <p className="text-sm mt-1">To connect your own data, update the API endpoint in the code.</p>
            </div>
            <ProjectsGrid projects={projects} />
          </>
        ) : (
          <ProjectsGrid projects={projects} />
        )}
      </div>
    </section>
  )
}
