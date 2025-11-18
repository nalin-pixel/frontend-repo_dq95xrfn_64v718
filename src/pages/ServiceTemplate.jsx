import React from 'react'

function PriceCard({ title, price, items }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-1 text-slate-700 list-disc list-inside">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  )
}

function ServiceTemplate({ title, intro, pricing, work }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-3 text-slate-700 max-w-3xl">{intro}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {pricing.map((p, i) => <PriceCard key={i} {...p} />)}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Selected work</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {work.map((w, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-200">
                <img src={w.image} alt={w.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="font-semibold">{w.title}</div>
                  <p className="text-sm text-slate-600">{w.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTemplate
