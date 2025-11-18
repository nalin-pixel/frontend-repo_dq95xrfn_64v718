import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Retail brand scale-up', result: '+210% ROAS', img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop' },
  { title: 'SaaS pipeline growth', result: '+3.4x MQLs', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop' },
  { title: 'DTC conversion uplift', result: '+28% CVR', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' }
]

function Work() {
  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-700">A snapshot of brands we've partnered with and the outcomes delivered.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.a key={it.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200"
            >
              <img src={it.img} alt={it.title} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
                <div className="text-sm text-slate-200">{it.result}</div>
                <div className="font-semibold">{it.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
