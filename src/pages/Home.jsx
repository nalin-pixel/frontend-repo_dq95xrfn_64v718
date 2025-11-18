import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Metrics from '../components/Metrics'
import Team from '../components/Team'
import Careers from '../components/Careers'
import ServiceGrid from '../components/ServiceGrid'
import { Link } from 'react-router-dom'

function SectionPreview({ id, title, children, to }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          {to && <Link to={to} className="text-blue-600 font-medium">See more</Link>}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <SectionPreview id="services" title="Services" to="/services">
        <ServiceGrid />
      </SectionPreview>
      <SectionPreview id="metrics" title="Results">
        <Metrics />
      </SectionPreview>
      <SectionPreview id="team" title="Team" to="/team">
        <Team minimal />
      </SectionPreview>
      <SectionPreview id="careers" title="Careers" to="/careers">
        <Careers />
      </SectionPreview>
      <SectionPreview id="about" title="About us" to="/about">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-slate-700">We’re a strategy-first digital partner blending media, content, design, and engineering. Transparent process, measurable outcomes, and a collaborative way of working.</p>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Team" className="rounded-xl border border-slate-200" />
        </div>
      </SectionPreview>
    </>
  )
}

export default Home
