export default function Videos(){
  return (
    <section id="videos" className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Neueste Videos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
          <div className="aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/3L0GvpBsLLI" title="Uber Eats in Frankfurt am Main ausprobiert" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-white font-semibold">Uber Eats in Frankfurt am Main ausprobiert</h3>
            <p className="text-sm text-blue-300/80">UNBEQUEM</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
          <div className="aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/qVlNFngV9N8" title="Probefahrt der Peugeot Kisbee M 125ccm" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-white font-semibold">Probefahrt der Peugeot Kisbee M 125ccm</h3>
            <p className="text-sm text-blue-300/80">BEQUEM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
