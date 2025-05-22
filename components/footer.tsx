import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-blue-950">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between max-w-screen-xl">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sayed Saad. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="https://github.com/sayedsaadhusain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sayedsaadhusain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
