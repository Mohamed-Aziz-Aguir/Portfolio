import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="backdrop-blur sticky top-0 z-50 bg-black/30 border-b border-slate-700/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold">MA</div>
          <span className="hidden sm:block text-sm font-semibold">Mohamed Aziz Aguir</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link href="/#about" className="hover:text-white">About</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/certifications" className="hover:text-white">Certifications</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
