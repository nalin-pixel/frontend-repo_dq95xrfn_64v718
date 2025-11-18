import React from 'react'

function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">About Bamboo Nine</h1>
        <p className="mt-4 text-slate-700">We’re a strategy-first digital marketing agency. Our teams across content, design, media and engineering collaborate closely to deliver work that’s equal parts craft and performance. We believe in transparency, measurable outcomes, and being human to work with.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold">Principles</h3>
            <p className="mt-2 text-slate-700">Clarity, curiosity, and kindness. We communicate openly and sweat the details.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold">Approach</h3>
            <p className="mt-2 text-slate-700">Discovery → Strategy → Design → Build → QA → Iterate. No black boxes.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold">Outcomes</h3>
            <p className="mt-2 text-slate-700">We align incentives to outcomes. Growth with guardrails, not vanity metrics.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
