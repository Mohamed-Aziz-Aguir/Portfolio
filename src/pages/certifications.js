import Head from 'next/head'
import Link from 'next/link'

export default function Certifications(){
  return (
    <div className="min-h-screen">
      <Head>
        <title>Certifications — Mohamed Aziz Aguir</title>
        <meta name="description" content="Certifications and badges for Mohamed Aziz Aguir. TryHackMe progress and future certifications." />
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Certifications & Badges</h1>
          <div className="text-sm text-slate-400">TryHackMe — in progress</div>
        </div>

        <div className="mt-6 p-4 border border-slate-700 rounded text-slate-300">
          No badges yet. As you collect TryHackMe badges and future certificates, we will display them here in a responsive grid with links to verification.
        </div>

        <div className="mt-10 flex gap-4">
          <Link href="/" className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50">← Home</Link>
          <Link href="/projects" className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50">Projects</Link>
        </div>
      </main>
    </div>
  )
}
