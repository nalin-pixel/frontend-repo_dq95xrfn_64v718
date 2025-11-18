import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, Loader2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function JobCard({ job, onApply }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">{job.title}</h4>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.department}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {job.employment_type}</span>
          </div>
        </div>
        {job.salary_range && (
          <span className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium">{job.salary_range}</span>
        )}
      </div>
      <p className="mt-3 text-slate-700">{job.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-600">{job.remote ? 'Remote friendly' : 'On-site'}</div>
        <button onClick={() => onApply(job)} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">Apply <ArrowRight className="h-4 w-4" /></button>
      </div>
    </motion.div>
  )
}

function Careers({ onApply }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/careers/jobs`)
        if (!res.ok) throw new Error('Failed to load jobs')
        const data = await res.json()
        if (Array.isArray(data) && data.length === 0) {
          // Try seeding if empty
          await fetch(`${API_BASE}/careers/seed`, { method: 'POST' })
          const res2 = await fetch(`${API_BASE}/careers/jobs`)
          const data2 = await res2.json()
          setJobs(data2)
        } else {
          setJobs(data)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">Careers at Bamboo Nine</motion.h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Join a team that values strategy, craft and curiosity. We’re collaborative, kind and serious about outcomes.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {loading && (
            <div className="col-span-full flex items-center justify-center py-10 text-slate-600"><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Loading roles…</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-600">{error}</div>
          )}
          {!loading && !error && jobs.length === 0 && (
            <div className="col-span-full text-center text-slate-600">No open roles right now. Check back soon.</div>
          )}
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={onApply} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
