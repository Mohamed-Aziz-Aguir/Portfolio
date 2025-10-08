import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-black/75 backdrop-blur border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Mohamed Aziz Aguir</div>
        <div className="flex items-center gap-4">
          <a href="mailto:mohamedaziz.aguir@outlook.com" className="hover:text-white">Email</a>
          <a href="https://www.linkedin.com/in/mohamedazizaguir" className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Mohamed-Aziz-Aguir" className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
        </div>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
