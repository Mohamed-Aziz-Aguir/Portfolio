import Head from 'next/head'
import Link from 'next/link'

export default function AwardDetail(){
  return (
    <div className="min-h-screen">
      <Head>
        <title>Bal des Projets — Winner | Awards</title>
        <meta name="description" content="Bal des Projets — Winner (ESPRIT) for SOC Architecture project." />
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Bal des Projets — Winner</h1>
          <div className="space-x-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/awards" className="hover:text-white">Awards</Link>
          </div>
        </div>

        <p className="mt-3 text-slate-300/90">ESPRIT · 2025</p>

        <div className="mt-6 space-y-3 text-slate-200">
          <p>Recognition for excellence on the SOC Architecture project (2nd year) at ESPRIT.</p>
          <p>Media and certificate images can be added here. Send them anytime and I&apos;ll wire them in.</p>
        </div>
      </main>
    </div>
  )
}
