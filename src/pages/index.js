import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Mohamed Aziz Aguir — Cybersecurity Engineer</title>
        <meta name="description" content="Cybersecurity Engineer in Monastir, Tunisia — Blue & Red Teaming, SOC, CTI, FastAPI, Docker, Elasticsearch." />
      </Head>

      <main id="about" className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-xl font-bold">MA</div>
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-200">Hi, I&apos;m Mohamed Aziz Aguir</h1>
            <p className="mt-3 text-slate-300/90 max-w-3xl">
              Final-Year Engineering Student at ESPRIT | SOC / SIEM Specialist | Cyber Threat Intelligence | Backend Development | FastAPI • Docker • Elasticsearch.
              Winner — Bal des Projets 2025.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/mohamedazizaguir" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white">LinkedIn</a>
              <a href="mailto:mohamedaziz.aguir@outlook.com" className="inline-flex items-center px-3 py-1.5 rounded-md border border-slate-600 hover:bg-slate-700/40">Email</a>
              <Link href="/#contact" className="inline-flex items-center px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-base font-medium transition-transform hover:scale-105">Contact Me</Link>
            </div>
          </div>
        </section>

        {/* KPI / Stats */}
        <section className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/projects" className="p-6 rounded-2xl border border-slate-700 bg-slate-900/30 block hover:scale-105 transition">
              <div className="text-3xl font-semibold text-indigo-200">2</div>
              <div className="text-slate-400">Projects</div>
            </Link>
            <Link href="/awards" className="p-6 rounded-2xl border border-slate-700 bg-slate-900/30 block hover:scale-105 transition">
              <div className="text-3xl font-semibold text-indigo-200">1</div>
              <div className="text-slate-400">Awards</div>
            </Link>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/projects/full-soc-deployment" className="p-4 rounded-2xl border border-slate-700/70 bg-slate-900/30 block hover:scale-105 transform transition">
              <h3 className="font-semibold">SOC Architecture Deployment — ESPRIT</h3>
              <p className="text-sm text-slate-300 mt-2">
                Built a full SOC with Wazuh, TheHive, Shuffle, Cortex and Velociraptor. Network zoning with pfSense, automated incident pipelines and ticket enrichment.
              </p>
              <div className="mt-4 flex gap-3">
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700">Blue Team</span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700">SOC</span>
              </div>
            </Link>

            <Link href="/projects/cti-platform" className="p-4 rounded-2xl border border-slate-700/70 bg-slate-900/30 block hover:scale-105 transform transition">
              <h3 className="font-semibold">Cyber Threat Intelligence Platform — Capgemini</h3>
              <p className="text-sm text-slate-300 mt-2">
                Production-ready backend for collecting, classifying and visualizing threat intelligence. Features AI classification, smart similarity search, interactive map and scheduled scans.
              </p>
              <div className="mt-4 flex gap-3">
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700">CTI</span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700">Backend</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact (single section) */}
        <section id="contact" className="mt-12">
          <div className="p-5 rounded-2xl border border-slate-700 bg-slate-900/30">
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <ul className="mt-2 text-slate-300/90 space-y-1">
              <li><span className="opacity-75">Preferred:</span> <a href="https://www.linkedin.com/in/mohamedazizaguir" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              <li><span className="opacity-75">Email:</span> <a href="mailto:mohamedaziz.aguir@outlook.com" className="hover:underline">mohamedaziz.aguir@outlook.com</a></li>
              <li><span className="opacity-75">Phone:</span> +216 93 236 576</li>
              <li><span className="opacity-75">Location:</span> Monastir, Tunisia</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
