import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function ApplicationForm({ job }) {
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    cover_letter: '',
    consent: true,
  })
  const [cv, setCv] = useState(null)
  const [portfolioFile, setPortfolioFile] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting application…' })
    try {
      const fd = new FormData()
      if (job?.id) fd.append('job_id', job.id)
      Object.entries(form).forEach(([k, v]) => {
        if (v !== undefined && v !== null) fd.append(k, String(v))
      })
      if (cv) fd.append('cv', cv)
      if (portfolioFile) fd.append('portfolio_file', portfolioFile)

      const res = await fetch(`${API_BASE}/careers/apply`, {
        method: 'POST',
        body: fd,
      })
      if (!res.ok) throw new Error('Application failed')
      await res.json()
      setStatus({ state: 'success', message: 'Thanks! Your application has been received.' })
      setForm({ name: '', email: '', phone: '', linkedin: '', portfolio: '', cover_letter: '', consent: true })
      setCv(null)
      setPortfolioFile(null)
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {job && (
        <div className="rounded-md bg-slate-50 border border-slate-200 p-3 text-sm text-slate-700">
          Applying for: <span className="font-medium">{job.title}</span>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Full name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">LinkedIn</label>
          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://…" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Portfolio URL</label>
        <input name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://…" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Cover letter</label>
        <textarea name="cover_letter" value={form.cover_letter} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">CV</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCv(e.target.files?.[0] || null)} className="mt-1 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Portfolio (optional)</label>
          <input type="file" accept=".pdf,.ppt,.pptx,.zip" onChange={(e) => setPortfolioFile(e.target.files?.[0] || null)} className="mt-1 w-full" />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
        I consent to my data being stored for recruitment purposes.
      </label>
      <div className="pt-2 flex items-center gap-3">
        <button type="submit" disabled={status.state === 'loading'} className="rounded-full bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 disabled:opacity-60">{status.state === 'loading' ? 'Submitting…' : 'Submit application'}</button>
        {status.state !== 'idle' && (
          <span className={status.state === 'success' ? 'text-green-600 text-sm' : status.state === 'error' ? 'text-red-600 text-sm' : 'text-slate-600 text-sm'}>{status.message}</span>
        )}
      </div>
    </form>
  )
}

export default ApplicationForm
