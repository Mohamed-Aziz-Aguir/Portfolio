import Link from 'next/link'

export default function Projects(){
  return (
    <div className='min-h-screen'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <Link href='/' className='text-sm text-slate-400 hover:text-white'>← Home</Link>
        </div>

        <ul className='mt-6 grid sm:grid-cols-2 gap-4'>
          <li className='p-4 rounded-lg border border-slate-700 hover:border-indigo-600 transition-colors'>
            <div className='text-sm text-slate-400'>Blue Team • SOC • SIEM</div>
            <Link href='/projects/full-soc-deployment' className='block mt-1 font-medium hover:underline'>SOC Architecture Project — ESPRIT</Link>
            <p className='mt-2 text-slate-300/90'>Wazuh, Velociraptor, TheHive, Shuffle, Cortex, Zabbix; pfSense zones (DMZ, Honeynet, LAN, SOC); automated incident pipelines &amp; enrichment.</p>
          </li>
          <li className='p-4 rounded-lg border border-slate-700 hover:border-indigo-600 transition-colors'>
            <div className='text-sm text-slate-400'>CTI • Backend • Automation</div>
            <Link href='/projects/cti-platform' className='block mt-1 font-medium hover:underline'>CTI Platform — Capgemini</Link>
            <p className='mt-2 text-slate-300/90'>Production CTI platform: FastAPI + Elasticsearch (8.13.4) + Redis + Docker, AI classification &amp; similarity search; Ubuntu 24.04.</p>
          </li>
        </ul>

        <div className='mt-10'>
          <Link href='/certifications' className='px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50'>Certifications</Link>
          <Link href='/awards' className='ml-3 px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50'>Awards (1)</Link>
        </div>
      </div>
    </div>
  )
}
