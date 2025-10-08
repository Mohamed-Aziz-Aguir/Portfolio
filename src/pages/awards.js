import Head from 'next/head'
import Link from 'next/link'

export default function Awards(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Awards — Mohamed Aziz Aguir</title>
        <meta name="description" content="Awards earned by Mohamed Aziz Aguir." />
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Awards (1)</h1>
          <div className="space-x-3 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Home</Link>
            <Link href="/projects" className="text-slate-400 hover:text-white">Projects</Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="p-5 rounded-xl border border-slate-700 hover:border-indigo-600 transition-colors">
            <div className="text-lg font-semibold">Bal des Projets — Winner</div>
            <div className="text-slate-400">ESPRIT · SOC Architecture project (2nd year)</div>
            <p className="mt-2 text-slate-300/90">
              Recognition for excellence on the SOC Architecture project at ESPRIT. (Media and certificate images coming soon — you can send them anytime and I will add them here.)
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
