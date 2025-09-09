'use client'

import { useState } from 'react'

export default function StayUpdated() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real application, you would send this to your backend
    alert(`Thank you for subscribing with: ${email}`)
    setEmail('')
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-dynapuff mb-4 text-black">
            Stay Updated with Travel Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest budget travel tips, destination guides, and exclusive deals delivered straight to your inbox.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-[#949494] bg-[#F3F3F5] focus:outline-none focus:ring-2 focus:ring-[#FFBF4C] text-base"
              required
            />
            <button
              type="submit"
              className="bg-[#FFBF4C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFB732] transition flex items-center justify-center space-x-2 text-base"
            >
              <span>Subscribe</span>
              <img 
                src="/arrowup.png" 
                alt="Arrow up" 
                className="w-5 h-5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}