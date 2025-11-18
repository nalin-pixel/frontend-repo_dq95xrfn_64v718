import React from 'react'
import TeamComp from '../components/Team'

function Team() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Our team</h1>
        <p className="mt-2 text-slate-700">A multi-disciplinary team of strategists, designers, writers and engineers.</p>
        <div className="mt-8">
          <TeamComp />
        </div>
      </div>
    </section>
  )
}

export default Team
