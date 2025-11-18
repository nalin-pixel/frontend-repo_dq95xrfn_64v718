import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout({ children }) {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onContact={() => setContactOpen(true)} />
      <div className="pt-16 flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
