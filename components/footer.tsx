import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Index",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/sayedsaadhusain" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/sayedsaadhusain/" },
        { name: "Twitter", href: "https://x.com/sayedsaadhusain" },
        { name: "Email", href: "mailto:sayedsaadhusain@gmail.com" },
      ],
    },
  ]

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden pt-20 pb-10">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column (Larger) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 group-hover:opacity-80 transition-opacity">
                Sayed Saad.
              </span>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Full-stack developer architecting elegant, scalable digital solutions. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4 pt-4">
              <SocialIcon href="https://github.com/sayedsaadhusain" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/sayedsaadhusain/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialIcon href="https://x.com/sayedsaadhusain" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialIcon href="mailto:sayedsaadhusain@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-semibold text-white tracking-wider text-sm uppercase">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace('home', '')}`} className="text-muted-foreground hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Action */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-semibold text-white tracking-wider text-sm uppercase">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Join my newsletter for the latest updates on my projects and tech articles.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Sayed Saad. Built with precision and passion.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
            <p className="text-xs text-muted-foreground flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>Next.js & Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300"
    >
      {icon}
    </Link>
  )
}
