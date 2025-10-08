import Image from 'next/image'

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'dark'
    localStorage.setItem('theme', t)
    setTheme(t)
    document.documentElement.classList.toggle('dark', t==='dark')
  },[])
  const toggle = () => {
    const next = theme==='dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next==='dark')
  }
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-slate-100">
      <Head>
      <title>Mohamed Aziz Aguir — Cybersecurity Engineer (Blue & Red Teaming)</title>
      <meta name="description" content="Mohamed Aziz Aguir — Cybersecurity Engineer focusing on SOC engineering, CTI, security automation, and both blue & red teaming. Based in Monastir, Tunisia." />
<meta property="og:title" content="Mohamed Aziz Aguir — Cybersecurity Engineer" />
      <meta property="og:description" content="SOC engineering, CTI, detection engineering, and security automation. View projects, resume, and contact." />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mohamed Aziz Aguir — Cybersecurity Engineer" />
      <meta name="twitter:description" content="SOC engineering, CTI, detection engineering, and security automation." />
      <meta name="twitter:image" content="/og-image.png" />


      </Head>

      <header className="backdrop-blur sticky top-0 z-50 bg-black/30 border-b border-slate-700/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold">MA</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Mohamed Aziz Aguir</div>
              <div className="text-xs text-slate-400">Cybersecurity Engineer</div>
            </div>
          </div>
          
        </div>
      </header>

      <main id="about" className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-800/30 border border-slate-700/40 shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-102">
              <div className="flex items-start gap-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-indigo-500/30">
                  <Image src="/img/profile.png" alt="Profile photo" className="w-full h-full object-cover" width={160} height={160} priority />
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold">Hi, I&apos;m <span className="text-indigo-300">Mohamed Aziz Aguir</span></h1>
                  <p className="mt-2 text-slate-300 max-w-2xl">Final-Year Engineering Student at ESPRIT | SOC / SIEM Specialist | Cyber Threat Intelligence | Backend Development | FastAPI • Docker • Elasticsearch. Winner — Bal des Projets 2025.</p>
                  <div className="mt-4 flex gap-3">
                    <a href="https://www.linkedin.com/in/mohamedazizaguir" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm">LinkedIn</a>
                    <a href="mailto:mohamedaziz.aguir@outlook.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-600 text-slate-200 text-sm">Email</a>
                    <Link href="/projects"  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm">View Projects</Link><Link href='/awards' className='inline-flex items-center px-3 py-1.5 rounded-md border border-slate-600 ml-2 hover:bg-slate-700/40 text-slate-200 text-sm'>Awards (1)</Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-[#071429]/20 text-center transform transition hover:-translate-y-1 hover:scale-105">
                  <div className="text-2xl font-bold text-indigo-300">12</div>
                  <div className="text-sm text-slate-400">Projects</div>
                </div>
                <div className="p-3 rounded-xl bg-[#071429]/20 text-center transform transition hover:-translate-y-1 hover:scale-105">
                  <div className="text-2xl font-bold text-indigo-300">3</div>
                  <div className="text-sm text-slate-400">Awards</div>
                </div>
                <div className="p-3 rounded-xl bg-[#071429]/20 text-center transform transition hover:-translate-y-1 hover:scale-105">
                  <div className="text-2xl font-bold text-indigo-300">1500</div>
                  <div className="text-sm text-slate-400">Automated CVE correlations</div>
                </div>
              </div>
            </div>

            <div id="work" className="grid md:grid-cols-2 gap-4">
              <article className="p-6 rounded-2xl bg-[#071429]/40 border border-slate-700/30 transform transition hover:-translate-y-2 hover:scale-105">
                <h3 className="font-semibold text-lg"><Link href="/projects/cti-platform"><a>Capgemini — Cyber Threat Intelligence Platform (Jun 2025 – Sep 2025)</a></Link></h3>
                <p className="mt-2 text-slate-300 text-sm">Designed and developed a production CTI platform focused on automotive and general cybersecurity. Built a modular FastAPI backend integrated with Elasticsearch (v8.13.4), Redis and Docker, implemented AI-powered classification and similarity search for automated 04 following Agile practices.</p>
              </article>
              <article className="p-6 rounded-2xl bg-[#071429]/40 border border-slate-700/30 transform transition hover:-translate-y-2 hover:scale-105">
                <h3 className="font-semibold text-lg"><Link href="/projects/full-soc-deployment"><a>ESPRIT — SOC Architecture & Automation (Nov 2024 – Jun 2025)</a></Link></h3>
                <p className="mt-2 text-slate-300 text-sm">Led the SOC Architecture project: deployed Wazuh, Velociraptor, TheHive, Shuffle, Cortex and Zabbix; configured pfSense zones (DMZ, Honeynet, LAN, SOC); built incident handling pipelines and automated alert enrichment and response workflows using Shuffle and Cortex analyzers.</p>
              </article>
            </div>

            <section id="projects" className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/projects/full-soc-deployment"><a className="project-card p-6 rounded-2xl bg-[#071429]/30 border border-slate-700/30 block hover:scale-105 transform transition"> 
                  <h3 className="font-semibold">SOC Architecture Deployment — ESPRIT</h3>
                  <p className="text-sm text-slate-300 mt-2">Built a full SOC with Wazuh, TheHive, Shuffle, Cortex and Velociraptor. Network zoning with pfSense, automated incident pipelines and ticket enrichment.</p>
                  <div className="mt-4 flex gap-3"><span className="btn-outline">Details</span><a className="btn-outline" href="https://github.com/Mohamed-Aziz-Aguir" target="_blank" rel="noopener noreferrer">Source</a></div>
                </a></Link>

                <Link href="/projects/cti-platform"><a className="project-card p-6 rounded-2xl bg-[#071429]/30 border border-slate-700/30 block hover:scale-105 transform transition"> 
                  <h3 className="font-semibold">Cyber Threat Intelligence Platform — Capgemini</h3>
                  <p className="text-sm text-slate-300 mt-2">Production-ready backend for collecting, classifying and visualizing threat intelligence. Features AI classification, smart similarity search, interactive map and scheduled scans.</p>
                  <div className="mt-4 flex gap-3"><span className="btn-outline">Details</span><a className="btn-outline" href="https://github.com/Mohamed-Aziz-Aguir" target="_blank" rel="noopener noreferrer">Source</a></div>
                </a></Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-4 rounded-2xl bg-[#071429]/30 border border-slate-700/30 card transform transition hover:-translate-y-2 hover:scale-105">
              <h3 className="font-semibold">Core Expertise</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2"><li>Blue Team: SOC Design, SIEM (Wazuh, ELK, Splunk)</li><li>Incident Response • Threat Hunting • Forensics (Velociraptor)</li><li>Dev & Automation: Python, FastAPI, Docker, Elasticsearch</li></ul>
            </div>

            <div id="skills" className="p-4 rounded-2xl bg-[#071429]/30 border border-slate-700/30 card transform transition hover:-translate-y-2 hover:scale-105">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-3 space-y-3 text-sm">
                <div><div className="flex justify-between text-slate-300"><span>Security Automation</span><span>85%</span></div><div className="w-full bg-slate-700 rounded-full h-2 mt-1"><div className="h-2 rounded-full bg-indigo-500" style={{width:'85%'}}></div></div></div>
                <div><div className="flex justify-between text-slate-300"><span>Threat Intelligence</span><span>80%</span></div><div className="w-full bg-slate-700 rounded-full h-2 mt-1"><div className="h-2 rounded-full bg-rose-500" style={{width:'80%'}}></div></div></div>
                <div><div className="flex justify-between text-slate-300"><span>Backend (FastAPI)</span><span>82%</span></div><div className="w-full bg-slate-700 rounded-full h-2 mt-1"><div className="h-2 rounded-full bg-emerald-500" style={{width:'82%'}}></div></div></div>
              </div>
            </div>

            <div id="contact" className="p-4 rounded-2xl bg-[#071429]/30 border border-slate-700/30 card transform transition hover:-translate-y-2 hover:scale-105">
              <h3 className="font-semibold">Contact</h3>
              <p className="text-slate-300 text-sm">Preferred: <a id="linkPref" href="https://www.linkedin.com/in/mohamedazizaguir" target="_blank" rel="noopener noreferrer" className="text-indigo-300">LinkedIn</a></p>
              <p className="text-slate-300 text-sm">Email: <a href="mailto:mohamedaziz.aguir@outlook.com" className="text-indigo-300">mohamedaziz.aguir@outlook.com</a></p>
            </div>
          </aside>
        </section>
      
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-white">Contact</h2>
      <p className="text-slate-300/90">Monastir, Tunisia · +216 93 236 576 · mohamedaziz.aguir@outlook.com</p>
    </section>
    
</main>

      <footer className="border-t border-slate-700/20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-400 flex items-center justify-between">
          <div>© 2025 Mohamed Aziz Aguir</div>
          <div>Built for Vercel • <a href="https://github.com/Mohamed-Aziz-Aguir" target="_blank" rel="noopener noreferrer" className="text-indigo-300">GitHub</a></div>
        </div>
      </footer>
    </div>
  )
}