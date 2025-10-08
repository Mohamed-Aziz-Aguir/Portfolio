import Link from 'next/link'

export default function AutomatedIR(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <Link href='/projects'><a className='text-indigo-300 hover:underline'>&larr; Back</a></Link>
        <h1 className='mt-4 text-2xl font-semibold'>Automated Incident Response — Apprenticeship</h1>
        <p className='mt-3 text-slate-300/90'>Jan 2025 — Mar 2025 · 3 months</p>

        <div className='mt-6 space-y-3 text-slate-200'>
          <ul className='list-disc list-inside space-y-1'>
            <li>Created <strong>Shuffle</strong> workflows to automatically respond to alerts from <strong>Wazuh</strong> and <strong>Velociraptor</strong>.</li>
            <li>Integrated <strong>Cortex</strong> analyzers to enrich <strong>TheHive</strong> incident tickets.</li>
            <li>Implemented IP auto‑blocking and critical event tagging for faster containment.</li>
          </ul>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Skills</h2>
          <p className='mt-1 text-slate-300/90'>Security Automation, Cyber Threat Intelligence</p>
        </div>
      </div>
    </div>
  )
}
