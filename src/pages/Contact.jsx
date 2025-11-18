import React, { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="mt-2 text-slate-700">Tell us about your goals and challenges. We’ll get back within one business day.</p>
        {!sent ? (
          <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); setSent(true)}}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" required />
            </div>
            <button className="rounded-full bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700">Send message</button>
          </form>
        ) : (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700">Thanks! We’ll be in touch shortly.</div>
        )}
      </div>
    </section>
  )
}

export default Contact
