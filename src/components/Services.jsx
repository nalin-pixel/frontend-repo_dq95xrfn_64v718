import React from 'react'
import { motion } from 'framer-motion'
import { Target, Megaphone, Leaf, Palette, BarChart3, Code2 } from 'lucide-react'

const groups = [
  { title: 'Strategy', icon: Target, items: ['Go-to-Market', 'Digital Roadmaps', 'Workshops'] },
  { title: 'Media', icon: Megaphone, items: ['PPC', 'Paid Social', 'CRO'] },
  { title: 'Organic', icon: Leaf, items: ['SEO', 'Content', 'Social'] },
  { title: 'Data', icon: BarChart3, items: ['Analytics', 'Dashboards', 'Attribution'] },
  { title: 'Creative', icon: Palette, items: ['Branding', 'UX / UI', 'Web Design'] },
  { title: 'Tech', icon: Code2, items: ['Web Development', 'eCommerce', 'Maintenance'] },
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Services that connect strategy to performance</h2>
          <p className="mt-3 text-slate-700">We combine planning, creative and full-funnel execution to build systems that convert.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(({ title, icon: Icon, items }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    {items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <a href="#contact" className="text-sm text-blue-700 hover:underline">Learn more</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
