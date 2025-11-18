import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onContact }) {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-16" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            Growth without guesswork.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-700"
          >
            Bamboo Nine is your strategy-first digital marketing partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <button onClick={onContact} className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium shadow hover:shadow-md transition">Get in touch</button>
            <a href="#services" className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50">Explore services</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              'Leads are slow?',
              'Conversions flat?',
              'Hard to measure ROI?'
            ].map((q, idx) => (
              <motion.div key={q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.1 * idx }}
                className="group rounded-xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition transform"
              >
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md mr-2">Q</span>
                <span className="underline decoration-dotted underline-offset-4 group-hover:decoration-blue-400">{q}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
