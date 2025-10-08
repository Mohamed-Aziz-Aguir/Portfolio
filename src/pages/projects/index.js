import Link from 'next/link'
export default function Projects(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <h1 className='text-2xl font-semibold'>Projects</h1>
        <ul className='mt-6 space-y-3 list-disc list-inside text-indigo-200'>
          <li><Link href='/projects/cti-platform'><a className='hover:underline'>CTI Platform — Capgemini</a></Link></li>
          <li><Link href='/projects/full-soc-deployment'><a className='hover:underline'>SOC Architecture Project — ESPRIT</a></Link></li>
          <li><Link href='/projects/automated-incident-response'><a className='hover:underline'>Automated Incident Response — Apprenticeship</a></Link></li>
          <li><Link href='/projects/red-team-lab'><a className='hover:underline'>Red Team Lab — In Progress</a></Link></li>
        </ul>
      </div>
    </div>
  )
}