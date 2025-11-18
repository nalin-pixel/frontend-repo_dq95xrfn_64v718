import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { slug: 'content', title: 'Content', blurb: 'Editorial strategy, SEO content, and brand copy that drives growth.' },
  { slug: 'editing', title: 'Editing', blurb: 'Polish with precision: structural edits to publication-ready QA.' },
  { slug: 'designing', title: 'Designing', blurb: 'Identity, UX/UI systems, and design for conversion.' },
  { slug: 'coaching', title: 'Coaching', blurb: 'Upskill your team with hands-on training and playbooks.' },
  { slug: 'web-developing', title: 'Web developing', blurb: 'Rock-solid frontends, SEO-ready CMS builds, and performance.' },
  { slug: 'motion-design', title: 'Motion design', blurb: 'Explainers, ads, and product motion for attention and clarity.' },
]

function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <Link key={it.slug} to={`/services/${it.slug}`} className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-slate-900">{it.title}</h4>
          <p className="mt-2 text-slate-600">{it.blurb}</p>
          <span className="mt-4 inline-block text-blue-600 font-medium">See more →</span>
        </Link>
      ))}
    </div>
  )
}

export default ServiceGrid
