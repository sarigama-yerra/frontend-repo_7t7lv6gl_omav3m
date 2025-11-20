import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/unbequem-logo.png" alt="UNBEQUEM" className="h-9 w-auto" onError={(e)=>{e.currentTarget.src='/flame-icon.svg'}} />
          <div className="hidden sm:block">
            <div className="text-white font-semibold leading-tight">UNBEQUEM</div>
            <div className="text-xs text-blue-300/80">Travel • Vlog • Motorrad • Reviews</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
          <a href="#kanale" className="hover:text-white">Kanäle</a>
          <a href="#videos" className="hover:text-white">Videos</a>
          <a href="#merch" className="hover:text-white">Merch</a>
          <a href="#partner" className="hover:text-white">Partner</a>
          <a href="https://netzfundament.de/" target="_blank" className="hover:text-white">Impressum</a>
        </nav>

        <button className="md:hidden p-2 text-blue-100" onClick={()=>setOpen(v=>!v)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-3 text-blue-100">
            <a href="#kanale" onClick={()=>setOpen(false)}>Kanäle</a>
            <a href="#videos" onClick={()=>setOpen(false)}>Videos</a>
            <a href="#merch" onClick={()=>setOpen(false)}>Merch</a>
            <a href="#partner" onClick={()=>setOpen(false)}>Partner</a>
            <a href="https://netzfundament.de/" target="_blank" onClick={()=>setOpen(false)}>Impressum</a>
          </nav>
        </div>
      )}
    </header>
  )
}
