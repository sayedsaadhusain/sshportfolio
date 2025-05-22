"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, Github, ExternalLink, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Project {
  id?: string
  Title?: string
  Description?: string
  TechStack?: string
  GitHubLink?: string
  LiveLink?: string
  Screenshot1?: string
  Screenshot2?: string
  Screenshot3?: string
  [key: string]: any // Allow for any additional fields from the API
}

// Fallback projects data for when the API fails
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
        setIsLoading(true)

        // Try to fetch from the API
        try {
          // Use the provided SheetBest API endpoint
          const response = await fetch("https://api.sheetbest.com/sheets/af65c243-a1ec-4db8-a8c6-9754e477f679")

          if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`)
          }

          const data = await response.json()
          console.log("API Response:", data) // Log the data to see its structure

          // Ensure each project has an id
          const projectsWithIds = data.map((project: Project, index: number) => ({
            ...project,
            id: project.id || `project-${index}`,
          }))

          setProjects(projectsWithIds)
          setError(null)
        } catch (err) {
          console.error("Error fetching projects:", err)

          // Use fallback data when API fails
          console.log("Using fallback project data")
          setProjects(fallbackProjects)
          setError("Note: Using demo data. Connect your Google Sheets API for real data.")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

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

  if (isLoading) {
    return (
      <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Projects</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              Showcasing my recent work
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p>Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Projects</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              Showcasing my recent work
            </p>
          </div>
          {error.includes("demo data") ? (
            <div className="flex justify-center items-center my-4">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-600 max-w-2xl">
                <p className="font-medium">{error}</p>
                <p className="mt-2 text-sm">
                  To connect your own data, update the API endpoint in the projects component.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="flex flex-col items-center gap-2 text-center max-w-md">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <p className="font-semibold">{error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            </div>
          )}
          {error.includes("demo data") && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"
            >
              {projects.map((project, index) => (
                <motion.div key={project.id} variants={item} custom={index}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <div className="space-y-2 text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Projects</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
            Showcasing my recent work
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div key={project.id || `project-${Math.random()}`} variants={item} custom={index}>
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p>No projects found.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  // Add null check for TechStack
  const techStack = project.TechStack ? project.TechStack.split(",").map((tech) => tech.trim()) : []

  // Collect all available screenshots with null checks
  const screenshots = [project.Screenshot1 || "", project.Screenshot2 || "", project.Screenshot3 || ""].filter(
    (url) => url !== "",
  ) as string[]

  // Add state for current slide
  const [currentSlide, setCurrentSlide] = useState(0)

  // Functions to navigate between slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  // Go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden hover-card-effect border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">{project.Title || "Untitled Project"}</CardTitle>
        <CardDescription className="line-clamp-2">{project.Description || "No description available."}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {screenshots.length > 0 && (
          <div className="relative w-full overflow-hidden rounded-md">
            {/* Improved slider with navigation controls */}
            <div className="relative aspect-video">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={screenshot || "/placeholder.svg?height=200&width=300"}
                    alt={`${project.Title || "Project"} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}

              {/* Navigation arrows */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full z-10 hover:bg-black/70 transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full z-10 hover:bg-black/70 transition-colors"
                    aria-label="Next slide"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Improved dots indicator */}
            {screenshots.length > 1 && (
              <div className="flex justify-center gap-2 mt-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-primary w-4" : "bg-primary/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {techStack.length > 0 ? (
            techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No technologies specified</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.GitHubLink && (
          <Button asChild variant="outline" size="sm" className="transition-all hover:bg-primary/10">
            <Link href={project.GitHubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {project.LiveLink && (
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 transition-colors">
            <Link href={project.LiveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
