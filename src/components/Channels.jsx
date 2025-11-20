import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function Stat({label, value}){
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-sm text-blue-300/80">{label}</div>
      <div className="text-2xl font-semibold text-white">{value ?? '—'}</div>
    </div>
  )
}

export default function Channels(){
  const [unb, setUnb] = useState(null)
  const [beq, setBeq] = useState(null)

  useEffect(()=>{
    async function load(){
      try{
        const a = await fetch(`${BACKEND}/api/youtube/channel_stats?handle=@UNBEQUEM-o2w`).then(r=>r.json())
        setUnb(a)
      }catch(e){ /* noop */ }
      try{
        const b = await fetch(`${BACKEND}/api/youtube/channel_stats?handle=@BEQUEM-g`).then(r=>r.json())
        setBeq(b)
      }catch(e){ /* noop */ }
    }
    load()
  },[])

  return (
    <section id="kanale" className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Unsere Kanäle</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img src="/unbequem-logo.png" alt="UNBEQUEM" className="h-14 w-14 rounded-lg bg-white/5 p-1" onError={(e)=>{e.currentTarget.src='/flame-icon.svg'}}/>
            <div>
              <div className="text-white font-semibold text-xl">UNBEQUEM</div>
              <div className="text-blue-300/80 text-sm">Travel • Vlog • Motorrad • Reviews</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Abonnenten" value={unb?.subscriberCount?.toLocaleString?.()} />
            <Stat label="Aufrufe" value={unb?.viewCount?.toLocaleString?.()} />
            <Stat label="Videos" value={unb?.videoCount?.toLocaleString?.()} />
          </div>
          <div className="mt-5 flex gap-3">
            <a href="https://www.youtube.com/@UNBEQUEM-o2w" target="_blank" className="px-4 py-2 rounded-lg bg-blue-500 text-white">Zum Kanal</a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img src="/bequem-logo.png" alt="BEQUEM" className="h-14 w-14 rounded-lg bg-white/5 p-1" onError={(e)=>{e.currentTarget.src='/flame-icon.svg'}}/>
            <div>
              <div className="text-white font-semibold text-xl">BEQUEM</div>
              <div className="text-blue-300/80 text-sm">Gaming • Livestream • Chill</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Abonnenten" value={beq?.subscriberCount?.toLocaleString?.()} />
            <Stat label="Aufrufe" value={beq?.viewCount?.toLocaleString?.()} />
            <Stat label="Videos" value={beq?.videoCount?.toLocaleString?.()} />
          </div>
          <div className="mt-5 flex gap-3">
            <a href="https://www.youtube.com/@BEQUEM-g" target="_blank" className="px-4 py-2 rounded-lg bg-blue-500 text-white">Zum Kanal</a>
          </div>
        </div>
      </div>
    </section>
  )
}
