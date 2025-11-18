import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ to, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const start = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.floor(p * to))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, to])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-slate-900">{value}+</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  )
}

function Metrics() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Counter to={120} label="Clients" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Counter to={90} label="Client retention" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Counter to={10} label="Years experience" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Metrics
