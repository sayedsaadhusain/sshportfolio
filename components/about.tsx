"use client"

import { motion } from "framer-motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

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
    <section id="about" className="w-full py-16 md:py-20 lg:py-24 bg-background dot-pattern">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mx-auto max-w-4xl space-y-8"
        >
          <div className="space-y-3 text-center">
            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={item}
              className="text-muted-foreground md:text-xl/normal lg:text-base/normal xl:text-xl/normal mx-auto max-w-[700px]"
            >
              Full Stack Developer specializing in modern web technologies
            </motion.p>
          </div>

          <motion.div variants={item} className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a passionate developer with expertise in building responsive, user-friendly applications. I specialize
              in the React ecosystem and modern PHP frameworks, creating seamless experiences that solve real-world
              problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I leverage tools like Next.js, Laravel,
              and cloud technologies to build scalable and performant solutions. I'm constantly exploring new
              technologies like AI integration and workflow automation to stay ahead of the curve.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Frontend */}
              <div className="relative h-full rounded-2xl p-0.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 h-full rounded-2xl bg-neutral-950 p-4 flex flex-col space-y-3">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
                      "React Router v6", "Vite", "Lenis", "Goober", "Alpine.js",
                      "Lucide Icons", "Google Font API", "Bunny Fonts"
                    ].map((skill) => (
                      <span key={skill} className="skill-badge text-sm bg-blue-900/20 text-blue-100 border-blue-800/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="relative h-full rounded-2xl p-0.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 h-full rounded-2xl bg-neutral-950 p-4 flex flex-col space-y-3">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="w-2 h-8 bg-green-500 rounded-full inline-block"></span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js", "PHP 8.3", "Laravel", "Livewire", "FilamentPHP",
                      "REST APIs", "GraphQL", "Pusher"
                    ].map((skill) => (
                      <span key={skill} className="skill-badge text-sm bg-green-900/20 text-green-100 border-green-800/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="relative h-full rounded-2xl p-0.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 h-full rounded-2xl bg-neutral-950 p-4 flex flex-col space-y-3">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "MongoDB", "PostgreSQL"].map((skill) => (
                      <span key={skill} className="skill-badge text-sm bg-yellow-900/20 text-yellow-100 border-yellow-800/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div className="relative h-full rounded-2xl p-0.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 h-full rounded-2xl bg-neutral-950 p-4 flex flex-col space-y-3">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
                    DevOps & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS", "Vercel", "Hostinger", "Hostinger CDN", "Bunny CDN",
                      "LiteSpeed", "HTTP/3", "reCAPTCHA"
                    ].map((skill) => (
                      <span key={skill} className="skill-badge text-sm bg-purple-900/20 text-purple-100 border-purple-800/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI & Automation */}
              <div className="relative h-full rounded-2xl p-0.5 md:col-span-2 lg:col-span-1">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 h-full rounded-2xl bg-neutral-950 p-4 flex flex-col space-y-3">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="w-2 h-8 bg-red-500 rounded-full inline-block"></span>
                    AI & Automation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI API Integration", "Prompt Engineering", "Workflow Automation (n8n)"
                    ].map((skill) => (
                      <span key={skill} className="skill-badge text-sm bg-red-900/20 text-red-100 border-red-800/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
