export default function Merch(){
  return (
    <section id="merch" className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Merch</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i=> (
          <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
            <div className="aspect-square rounded-lg bg-white/5 border border-white/10 mb-3"></div>
            <div className="text-white font-semibold">Produkt {i}</div>
            <div className="text-sm text-blue-300/80">Bald verfügbar</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-blue-300/80">Unser Merch ist in Arbeit. Folge unseren Kanälen, um den Drop nicht zu verpassen.</p>
    </section>
  )
}
