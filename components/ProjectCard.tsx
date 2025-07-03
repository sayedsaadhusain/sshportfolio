"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card className="flex flex-col h-full overflow-hidden hover-card-effect border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">{project.title || "Untitled Project"}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description || "No description available."}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {screenshots.length > 0 && (
          <div className="relative w-full overflow-hidden rounded-md">
            <div className="relative aspect-video">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full z-10 hover:bg-black/70"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full z-10 hover:bg-black/70"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            {screenshots.length > 1 && (
              <div className="flex justify-center gap-2 mt-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 w-2 rounded-full ${
                      currentSlide === index ? "bg-primary w-4" : "bg-primary/30"
                    } transition-all`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

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
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.gitHubLink && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.gitHubLink} target="_blank">
              <Github className="mr-1 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {project.liveLink && (
          <Button asChild size="sm">
            <Link href={project.liveLink} target="_blank">
              <ExternalLink className="mr-1 h-4 w-4" />
              Live
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
