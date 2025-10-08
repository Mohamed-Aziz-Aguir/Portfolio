import Link from 'next/link'

export default function SOC(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <Link href="\1"  className='text-indigo-300 hover:underline'>\3</Link>
        <div className='flex items-center justify-between'><h1 className='mt-4 text-2xl font-semibold'>SOC Architecture Project — ESPRIT</h1><div className='flex gap-3 text-sm text-slate-400'><Link href='/' className='hover:text-white'>Home</Link><span>•</span><Link href='/projects' className='hover:text-white'>Projects</Link></div></div>
        <p className='mt-3 text-slate-300/90'>Academic · Nov 2024 — Present · On‑site</p>

        <div className='mt-6 space-y-3 text-slate-200'>
          <ul className='list-disc list-inside space-y-1'>
            <li>Designed and deployed a complete open‑source SOC using <strong>Wazuh</strong>, <strong>Velociraptor</strong>, <strong>TheHive</strong>, <strong>Shuffle</strong>, <strong>Cortex</strong>, and <strong>Zabbix</strong>.</li>
            <li>Configured <strong>pfSense</strong> firewalls and segmentation to define SOC zones (DMZ, Honeynet, LAN, SOC).</li>
            <li>Built incident handling pipelines with automated alert escalation and enrichment.</li>
            <li>Containerized services with <strong>Docker</strong> for isolation and easier deployment.</li>
          </ul>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>Focus Areas</h2>
          <p className='mt-1 text-slate-300/90'>SOC Architecture, SIEM Integration, Network Segmentation, Incident Response</p>
        </div>
      </div>
    </div>
  )
}
