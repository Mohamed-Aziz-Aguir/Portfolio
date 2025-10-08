import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const t = typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'dark') : 'dark'
    setTheme(t)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', t==='dark')
    }
  },[])
  const toggle = () => {
    const next = theme==='dark' ? 'light' : 'dark'
    setTheme(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', next)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next==='dark')
    }
  }
  return (
    <button onClick={toggle} className="inline-flex items-center px-3 py-1.5 rounded-md border border-slate-600 text-slate-200 text-sm hover:bg-slate-700/30">
      {theme==='dark' ? 'Dark' : 'Light'}
    </button>
  )
}
