import Link from 'next/link'
import Head from 'next/head'

export default function SOC(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <Head>
        <title>SOC Architecture — ESPRIT | Projects</title>
        <meta name="description" content="Wazuh, Velociraptor, TheHive, Shuffle, Cortex, Zabbix; pfSense zones; automated incident pipelines and enrichment." />
      </Head>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>SOC Architecture & Automation — ESPRIT</h1>
          <div className='space-x-3 text-sm text-slate-400'>
            <Link href='/' className='hover:text-white'>Home</Link>
            <Link href='/projects' className='hover:text-white'>Projects</Link>
          </div>
        </div>

        <p className='mt-3 text-slate-300/90'>Nov 2024 — Jun 2025 · Academic</p>

        <div className='mt-6 space-y-3 text-slate-200'>
          <p>Led the SOC Architecture project:</p>
          <ul className='list-disc list-inside space-y-1'>
            <li>Deployed <strong>Wazuh</strong>, <strong>Velociraptor</strong>, <strong>TheHive</strong>, <strong>Shuffle</strong>, <strong>Cortex</strong>, and <strong>Zabbix</strong>.</li>
            <li>Configured <strong>pfSense</strong> zones (DMZ, Honeynet, LAN, SOC).</li>
            <li>Built incident handling pipelines and automated alert enrichment & response using <strong>Shuffle</strong> + <strong>Cortex</strong> analyzers.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
