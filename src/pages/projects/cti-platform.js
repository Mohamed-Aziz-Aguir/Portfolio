import Link from 'next/link'
import Head from 'next/head'

export default function CTI(){
  return (
    <div className='min-h-screen'>
      <Head>
        <title>CTI Platform — Capgemini | Projects</title>
        <meta name="description" content="Production CTI platform: FastAPI + Elasticsearch (8.13.4) + Redis + Docker, AI classification & similarity search; Ubuntu 24.04." />
      </Head>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Cyber Threat Intelligence Platform — Capgemini</h1>
          <div className='space-x-3 text-sm text-slate-400'>
            <Link href='/' className='hover:text-white'>Home</Link>
            <Link href='/projects' className='hover:text-white'>Projects</Link>
          </div>
        </div>

        <p className='mt-3 text-slate-300/90'>Jun 2025 — Sep 2025 · Internship</p>

        <div className='mt-6 space-y-3 text-slate-200'>
          <p>Designed and developed a production CTI platform focused on automotive and general cybersecurity.</p>
          <ul className='list-disc list-inside space-y-1'>
            <li>Modular <strong>FastAPI</strong> backend with <strong>Elasticsearch (8.13.4)</strong>, <strong>Redis</strong>, and <strong>Docker</strong>.</li>
            <li>AI-powered classification and similarity search for automated CVE correlation.</li>
            <li>Deployment on <strong>Ubuntu 24.04</strong>, Agile practices.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
