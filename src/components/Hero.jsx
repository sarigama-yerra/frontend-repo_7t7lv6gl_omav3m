export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.15),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              UNBEQUEM & BEQUEM
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-xl">
              Zwei Welten, ein Vibe: Abenteuer auf zwei Rädern, Vlogs und Reviews – und die chillige Seite mit Gaming & Livestreams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#kanale" className="px-5 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-400">Kanäle entdecken</a>
              <a href="#merch" className="px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/10">Merch ansehen</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/3L0GvpBsLLI" title="UNBEQUEM Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
