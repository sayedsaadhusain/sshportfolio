"use client"

import { useState } from "react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "./projects"

export default function ProjectCard({ project }: { project: Project }) {
  const techStack = project.techStack ? project.techStack.split(",").map((tech) => tech.trim()) : []
  const screenshots = [project.screenshot1, project.screenshot2, project.screenshot3].filter(Boolean) as string[]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  const goToSlide = (index: number) => setCurrentSlide(index)

  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title || "Untitled Project"}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
        >
          {project.description || "No description available."}
        </CardItem>

        <CardItem translateZ="120" className="w-full mt-4 flex-grow">
          {screenshots.length > 0 && (
            <div className="relative w-full overflow-hidden rounded-xl aspect-video group-hover/card:shadow-xl">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}

            </div>
          )}
        </CardItem>

        <CardItem translateZ="40" className="mt-4">
          <div className="flex flex-wrap gap-1">
            {techStack.length > 0 ? (
              techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs bg-primary/10">
                  {tech}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No tech specified</p>
            )}
          </div>
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          {project.gitHubLink && (
            <CardItem
              translateZ={20}
              as={Link}
              href={project.gitHubLink}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Button asChild variant="outline" size="sm" className="pointer-events-none">
                <span className="flex items-center">
                  <Github className="mr-1 h-4 w-4" /> Code
                </span>
              </Button>
            </CardItem>
          )}

          {project.liveLink && (
            <CardItem
              translateZ={20}
              as={Link}
              href={project.liveLink}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-bold"
            >
              <Button asChild size="sm" className="pointer-events-none">
                <span className="flex items-center">
                  <ExternalLink className="mr-1 h-4 w-4" /> Live
                </span>
              </Button>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  )
}
