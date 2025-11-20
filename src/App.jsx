import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Channels from './components/Channels'
import Videos from './components/Videos'
import Merch from './components/Merch'
import Partners from './components/Partners'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <Channels />
      <Videos />
      <Merch />
      <Partners />
      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-blue-300/70">© {new Date().getFullYear()} UNBEQUEM / BEQUEM</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://www.youtube.com/@UNBEQUEM-o2w" target="_blank" className="hover:text-white">YouTube UNBEQUEM</a>
            <a href="https://www.youtube.com/@BEQUEM-g" target="_blank" className="hover:text-white">YouTube BEQUEM</a>
            <a href="https://netzfundament.de/" target="_blank" className="hover:text-white">Impressum (Netzfundament)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
