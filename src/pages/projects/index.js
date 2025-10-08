import { useState } from 'react'
import Link from 'next/link'

const DATA = [
  { slug:'/projects/cti-platform', title:'CTI Platform — Capgemini', tags:['CTI','Backend','Automation'] },
  { slug:'/projects/full-soc-deployment', title:'SOC Architecture Project — ESPRIT', tags:['Blue Team','SOC','SIEM'] },
  { slug:'/projects/automated-incident-response', title:'Automated Incident Response — Apprenticeship', tags:['Automation','IR','Blue Team'] },
  { slug:'/projects/red-team-lab', title:'Red Team Lab — In Progress', tags:['Red Team'] },
]

const TAGS = ['All','Blue Team','Automation','CTI','Red Team','SOC','SIEM','Backend']

export default function Projects(){
  const [active, setActive] = useState('All')
  const filtered = active==='All' ? DATA : DATA.filter(p => p.tags.includes(active))
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <Link href='/' className='text-sm text-slate-400 hover:text-white'>← Home</Link>
        </div>

        <div className='mt-6 flex flex-wrap gap-2'>
          {TAGS.map(t => (
            <button key={t} onClick={()=>setActive(t)} className={`px-3 py-1.5 rounded border ${active===t?'border-indigo-600 bg-indigo-600/20':'border-slate-700 hover:bg-slate-800/50'} text-sm`}>{t}</button>
          ))}
        </div>

        <ul className='mt-6 grid sm:grid-cols-2 gap-4'>
          {filtered.map(p => (
            <li key={p.slug} className='p-4 rounded-lg border border-slate-700 hover:border-indigo-600 transition-colors'>
              <div className='text-sm text-slate-400'>{p.tags.join(' • ')}</div>
              <Link href={p.slug} className='block mt-1 font-medium hover:underline'>{p.title}</Link>
              <div className='mt-3 text-sm'>
                <Link href={p.slug} className='px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50'>View</Link>
              </div>
            </li>
          ))}
        </ul>

        <div className='mt-10'>
          <Link href='/' className='px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50'>← Home</Link>
          <Link href='/certifications' className='ml-3 px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800/50'>Certifications</Link>
        </div>
      </div>
    </div>
  )
}