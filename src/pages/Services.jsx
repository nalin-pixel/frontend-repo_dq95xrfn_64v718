import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ServiceTemplate from './ServiceTemplate'
import ServiceGrid from '../components/ServiceGrid'

const commonWork = [
  { title: 'Fintech content engine', summary: 'Editorial strategy and SEO growth for a fintech scale-up.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Brand refresh + site', summary: 'Identity, UI system and high-performing web build.', image: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Launch campaign', summary: 'Paid social + landing pages for a product launch.', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop' },
]

const services = {
  content: {
    title: 'Content',
    intro: 'Editorial strategy, SEO content, and brand copy that drives growth and builds authority.',
    pricing: [
      { title: 'Starter', price: '£2,000/mo', items: ['Content calendar', '4 articles/mo', 'On-page SEO'] },
      { title: 'Growth', price: '£5,000/mo', items: ['Strategy + calendar', '8-10 pieces/mo', 'Link building'] },
      { title: 'Scale', price: '£10,000+/mo', items: ['Full content engine', 'Thought leadership', 'Digital PR'] },
    ],
  },
  editing: {
    title: 'Editing',
    intro: 'From structural edits to publication-ready QA across web, docs and product UI.',
    pricing: [
      { title: 'Per hour', price: '£100/hr', items: ['Copy editing', 'Proof reading', 'Style QA'] },
      { title: 'Retainer', price: '£3,000/mo', items: ['Editorial support', 'Docs maintenance', 'Release notes'] },
      { title: 'Embedded', price: '£8,000+/mo', items: ['On-call edits', 'Team enablement', 'Guidelines'] },
    ],
  },
  designing: {
    title: 'Designing',
    intro: 'Identity, UX/UI systems, and design for conversion. Accessible and on-brand.',
    pricing: [
      { title: 'Brand kit', price: '£4,000', items: ['Logo + palette', 'Type system', 'Guidelines'] },
      { title: 'Product UI', price: '£8,000+', items: ['Design system', 'Core screens', 'Handoff'] },
      { title: 'Website', price: '£12,000+', items: ['UX + UI', 'Responsive', 'Dev-ready assets'] },
    ],
  },
  coaching: {
    title: 'Coaching',
    intro: 'Upskill your team with hands-on training and playbooks across SEO, content, and product.',
    pricing: [
      { title: 'Workshop', price: '£2,000', items: ['Half-day workshop', 'Templates', 'Q&A'] },
      { title: 'Bootcamp', price: '£6,000', items: ['2-day training', 'Exercises', 'Playbooks'] },
      { title: 'Advisory', price: '£4,000/mo', items: ['Monthly sessions', 'Review + feedback', 'On-call support'] },
    ],
  },
  'web-developing': {
    title: 'Web developing',
    intro: 'Rock-solid frontends, SEO-ready CMS builds, and performance engineering.',
    pricing: [
      { title: 'Landing', price: '£3,500+', items: ['Design + build', 'Analytics', 'Optimisation'] },
      { title: 'Marketing site', price: '£9,000+', items: ['CMS setup', 'Animations', 'SEO baseline'] },
      { title: 'Web app', price: '£20,000+', items: ['React front-end', 'API integration', 'Auth + dashboards'] },
    ],
  },
  'motion-design': {
    title: 'Motion design',
    intro: 'Explainers, ads, and product motion for attention, clarity and brand.',
    pricing: [
      { title: 'Explainer', price: '£3,000+', items: ['Script', 'Storyboard', '60s animation'] },
      { title: 'Ads pack', price: '£2,000+', items: ['3x variants', 'Ratios + sizes', 'Subtitles'] },
      { title: 'Product motion', price: '£4,000+', items: ['UI motion', 'Micro-interactions', 'Brand motion'] },
    ],
  },
}

function ServicesPage() {
  const params = useParams()
  const slug = params.slug

  if (!slug) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h1 className="text-4xl font-bold">Services</h1>
          </div>
          <div className="mt-8">
            <ServiceGrid />
          </div>
        </div>
      </section>
    )
  }

  const data = services[slug]
  if (!data) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl font-semibold">Service not found</h1>
          <p className="mt-2 text-slate-700">This service does not exist. See all <Link to="/services" className="text-blue-600">services</Link>.</p>
        </div>
      </section>
    )
  }

  return (
    <ServiceTemplate title={data.title} intro={data.intro} pricing={data.pricing} work={commonWork} />
  )
}

export default ServicesPage
