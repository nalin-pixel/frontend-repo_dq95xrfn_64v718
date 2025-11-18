import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CTAContact({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[540px]"
          >
            <div className="rounded-t-2xl md:rounded-2xl bg-white shadow-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Get in touch</h3>
                <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
              </div>
              <form className="mt-4 grid grid-cols-1 gap-3">
                <input className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Name" />
                <input type="email" className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Email" />
                <textarea rows="4" className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Tell us about your goals" />
                <button type="button" onClick={onClose} className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 font-medium hover:bg-slate-800">Send message</button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CTAContact
