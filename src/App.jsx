import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Metrics from './components/Metrics'
import Work from './components/Work'
import Team from './components/Team'
import CTAContact from './components/CTAContact'

function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onContact={() => setContactOpen(true)} />

      <main>
        <Hero onContact={() => setContactOpen(true)} />
        <Services />
        <Metrics />
        <Work />
        <Team />

        {/* About section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Strategy-first. Transparent. Collaborative.</h2>
              <p className="mt-4 text-slate-700">We’ve spent years learning what works so you don’t have to. From discovery and roadmaps to design, build and performance media, we plug in as a seamless extension of your team.</p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> UX, SEO and accessibility baked in</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Discovery → Strategy → Design → Build → QA</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Post-launch support, training and maintenance</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Team collaborating" className="w-full h-80 object-cover" />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to grow without the guesswork?</h3>
            <p className="mt-3 text-slate-700">Tell us about your goals. We’ll share how we’d approach them.</p>
            <div className="mt-6">
              <button onClick={() => setContactOpen(true)} className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700">Get in touch</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center font-bold">B9</div>
            <p className="mt-3 text-sm text-slate-600">Strategy-first digital marketing agency. Brighton, UK.</p>
            <p className="mt-2 text-sm text-slate-600">Phone: +44 0000 000000</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#team" className="hover:underline">Our team</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Bamboo Nine – All rights reserved.</div>
      </footer>

      <CTAContact open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

export default App
