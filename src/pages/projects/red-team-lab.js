import Link from 'next/link'

export default function RedTeamLab(){
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-5xl mx-auto px-6 py-12'>
        <Link href="\1"  className='text-indigo-300 hover:underline'>\3</Link>
        <div className='flex items-center justify-between'><h1 className='mt-4 text-2xl font-semibold'>Red Team Lab — In Progress</h1><div className='flex gap-3 text-sm text-slate-400'><Link href='/' className='hover:text-white'>Home</Link><span>•</span><Link href='/projects' className='hover:text-white'>Projects</Link></div></div>
        <p className='mt-3 text-slate-300/90'>A living lab outline for red-team exercises, documentation, and detection notes.</p>

        <div className='mt-6 space-y-4'>
          <h2 className='text-lg font-semibold'>Lab Outline</h2>
          <ol className='list-decimal list-inside text-slate-200 space-y-2'>
            <li><strong>Recon:</strong> Open-source intelligence, network scan, service enumeration (nmap, amass, dirb), and threat modeling.</li>
            <li><strong>Initial Access:</strong> Exploit vectors, phishing simulations, web vulnerabilities (OWASP), and credential stuffing testing in a controlled lab.</li>
            <li><strong>Privilege Escalation:</strong> Local exploits, misconfigurations, credential reuse, and lateral movement techniques.</li>
            <li><strong>Post-Exploitation:</strong> Persistence, data exfiltration simulations, and cleanup strategies.</li>
            <li><strong>Detection Notes:</strong> Logging, indicators of compromise (IOCs), hunting queries (Sigma/KQL), and mitigations.</li>
            <li><strong>Lessons & Reports:</strong> Executive summary, technical appendix, IOCs, recommended remediations.</li>
          </ol>
        </div>

        <div className='mt-6'>
          <h2 className='text-lg font-semibold'>How to use</h2>
          <p className='text-slate-300/90'>Use this page as a template to document your red-team exercises. Add playbooks, logs, and detection snippets as you complete labs.</p>
        </div>
      </div>
    </div>
  )
}
