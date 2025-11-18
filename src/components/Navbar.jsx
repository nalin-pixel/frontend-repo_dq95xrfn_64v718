import React, { useState } from 'react'
import { Menu, Phone, ChevronDown, X } from 'lucide-react'

const services = [
  {
    title: 'Strategy',
    items: ['Go-to-Market', 'Digital Roadmaps', 'Workshops']
  },
  {
    title: 'Media',
    items: ['PPC', 'Paid Social', 'CRO']
  },
  {
    title: 'Organic',
    items: ['SEO', 'Content', 'Social']
  },
  {
    title: 'Creative',
    items: ['Branding', 'UX / UI', 'Web Design']
  },
  {
    title: 'Data',
    items: ['Analytics', 'Dashboards', 'Attribution']
  },
  {
    title: 'Tech',
    items: ['Web Dev', 'eCommerce', 'Maintenance']
  }
]

function Navbar({ onContact }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold shadow-sm">B9</div>
            <span className="font-semibold text-slate-900 tracking-tight">Bamboo Nine</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <div className="group relative">
              <button className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[820px] p-4 bg-white rounded-xl shadow-xl border border-slate-200/60">
                <div className="grid grid-cols-3 gap-4">
                  {services.map((col) => (
                    <div key={col.title} className="">
                      <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">{col.title}</p>
                      <ul className="space-y-1">
                        {col.items.map((it) => (
                          <li key={it} className="">
                            <a href="#services" className="block rounded-md px-2 py-1.5 hover:bg-slate-50 text-slate-700 hover:text-slate-900">{it}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="#work" className="hover:text-slate-900">Our work</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#team" className="hover:text-slate-900">Our team</a>
            <a href="#careers" className="hover:text-slate-900">Careers</a>
            <span className="text-slate-400">Blog</span>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onContact} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-colors">
              <Phone className="h-4 w-4" /> Get in touch
            </button>
            <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl border-l border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">B9</div>
              <button onClick={() => setOpen(false)} className="p-2 text-slate-600"><X className="h-5 w-5" /></button>
            </div>
            <nav className="mt-6 space-y-4 text-slate-800">
              <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
              <a href="#work" onClick={() => setOpen(false)} className="block">Our work</a>
              <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
              <a href="#team" onClick={() => setOpen(false)} className="block">Our team</a>
              <a href="#careers" onClick={() => setOpen(false)} className="block">Careers</a>
            </nav>
            <button onClick={() => { setOpen(false); onContact?.() }} className="mt-6 w-full rounded-full bg-blue-600 text-white px-4 py-2 font-medium">Get in touch</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
