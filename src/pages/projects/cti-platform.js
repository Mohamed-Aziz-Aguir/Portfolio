import Link from 'next/link'

export default function CTI(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <Link href='/projects'><a className='text-indigo-300 hover:underline'>&larr; Back</a></Link>
        <h1 className='mt-4 text-2xl font-semibold'>CTI Platform — Capgemini</h1>
        <p className='mt-3 text-slate-300/90'>Internship · Jun 2025 — Sep 2025 · Tunis, Tunisia · Hybrid</p>

        <div className='mt-6 space-y-3 text-slate-200'>
          <p>Designed and developed a Cyber Threat Intelligence (CTI) Platform for automotive and general cybersecurity threat analysis.</p>
          <ul className='list-disc list-inside space-y-1'>
            <li>Built a modular <strong>FastAPI</strong> backend integrating <strong>Elasticsearch (8.13.4)</strong>, <strong>Redis</strong>, and <strong>Docker</strong> for scalable data management.</li>
            <li>Implemented AI-powered classification and similarity search using the <strong>Groq API</strong> to automate threat categorization.</li>
            <li>Delivered key features: Automotive threat dashboard (real-time + 1‑year history), general threat feed (CVEs, exploits), interactive global threat map, automated scan scheduler (every 10 minutes), and data pruning for ~1TB storage.</li>
            <li>Deployment-ready on Ubuntu 24.04 with a containerized stack.</li>
          </ul>
          <p className='text-sm text-slate-400'>Source code is private per policy. Public demo link can be added later if approved.</p>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Tech Stack</h2>
          <p className='mt-1 text-slate-300/90'>Python, FastAPI, Elasticsearch, Redis, Docker, Groq API</p>
        </div>
      </div>
    </div>
  )
}
