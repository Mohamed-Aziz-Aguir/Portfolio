import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Mohamed Aziz Aguir</div>
        <div className="flex items-center gap-4">
          <a href="mailto:mohamedaziz.aguir@outlook.com" className="hover:text-white">Email</a>
          <a href="https://www.linkedin.com/in/mohamedazizaguir" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/Mohamed-Aziz-Aguir" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
        </div>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
