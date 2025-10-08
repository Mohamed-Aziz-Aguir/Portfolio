import Head from 'next/head'
import Link from 'next/link'

export default function THM(){
  return (
    <div className="min-h-screen">
      <Head>
        <title>TryHackMe — Badges (In Progress) | Certifications</title>
        <meta name="description" content="TryHackMe progress and future badges for Mohamed Aziz Aguir." />
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">TryHackMe — Badges (In Progress)</h1>
          <div className="space-x-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/certifications" className="hover:text-white">Certifications</Link>
          </div>
        </div>

        <div className="mt-6 p-4 border border-slate-700 rounded text-slate-300">
          As you collect TryHackMe badges, we&apos;ll display them here with icons and verification links.
        </div>
      </main>
    </div>
  )
}
