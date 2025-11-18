import React from 'react'

function Footer() {
  return (
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
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/team" className="hover:underline">Our team</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
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
  )
}

export default Footer
