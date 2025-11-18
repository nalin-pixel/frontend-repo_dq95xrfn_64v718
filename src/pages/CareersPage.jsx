import React, { useEffect, useState } from 'react'
import ApplicationForm from '../components/ApplicationForm'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function CareersPage() {
  const [jobs, setJobs] = useState([])
  const [active, setActive] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const res = await fetch(`${API_BASE}/careers/jobs`)
      let data = await res.json()
      if (Array.isArray(data) && data.length === 0) {
        await fetch(`${API_BASE}/careers/seed`, { method: 'POST' })
        const r2 = await fetch(`${API_BASE}/careers/jobs`)
        data = await r2.json()
      }
      setJobs(data)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold">Careers</h1>
          <p className="mt-2 text-slate-700">We’re always looking for bright minds. Explore our open roles.</p>
          <div className="mt-8 space-y-4">
            {loading ? (
              <div className="text-slate-600">Loading…</div>
            ) : jobs.map((j) => (
              <button key={j.id} onClick={()=>setActive(j)} className={`w-full text-left rounded-xl border p-5 hover:shadow ${active?.id===j.id?'border-blue-300 bg-blue-50':'border-slate-200 bg-white'}`}>
                <div className="font-semibold text-slate-900">{j.title}</div>
                <div className="text-sm text-slate-600">{j.department} • {j.location} • {j.employment_type}</div>
              </button>
            ))}
          </div>
          {active && (
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold">{active.title}</h2>
              <p className="mt-2 text-slate-700">{active.description}</p>
              {active.responsibilities?.length>0 && (
                <div className="mt-4">
                  <h3 className="font-semibold">Responsibilities</h3>
                  <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                    {active.responsibilities.map((r,i)=>(<li key={i}>{r}</li>))}
                  </ul>
                </div>
              )}
              {active.requirements?.length>0 && (
                <div className="mt-4">
                  <h3 className="font-semibold">Requirements</h3>
                  <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                    {active.requirements.map((r,i)=>(<li key={i}>{r}</li>))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 sticky top-24">
            <h3 className="text-xl font-semibold">Apply now</h3>
            <p className="text-slate-700 text-sm">Include your CV and any portfolio links or files.</p>
            <div className="mt-4">
              <ApplicationForm job={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersPage
