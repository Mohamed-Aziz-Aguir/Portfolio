import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Certifications(){
  const badges = [] // Add badges here later: [{title, img:'/badges/x.png', link:'https://...'}]

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Certifications & Badges — Mohamed Aziz Aguir</title>
        <meta name="description" content="Certifications and badges for Mohamed Aziz Aguir. TryHackMe progress and future certifications." />
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Certifications & Badges</h1>
          <div className="text-sm text-slate-400">TryHackMe — in progress</div>
        </div>

        {badges.length === 0 ? (
          <div className="mt-6 p-4 border border-slate-700 rounded text-slate-300">
            No badges yet. As you collect TryHackMe badges and future certificates, we will display them here in a responsive grid with links to verification.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {badges.map((b, i) => (
              <a key={i} href={b.link} target="_blank" rel="noreferrer" className="group p-4 border border-slate-700 rounded hover:border-indigo-600 transition-colors">
                <div className="relative w-full h-24">
                  <Image src={b.img} alt={b.title} fill className="object-contain" />
                </div>
                <div className="mt-2 text-center text-sm text-slate-300 group-hover:text-white">{b.title}</div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-10 flex gap-4">
          <Link href="/" className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50">← Home</Link>
          <Link href="/projects" className="px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50">Projects</Link>
        </div>
      </main>
    </div>
  )
}
