'use client'

import { useState } from 'react'

// interface Message {
//   role: 'user' | 'assistant'
//   content: string
// }

export default function AIAssistant() {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    const userMessage = message
    setConversation(prev => [...prev, { role: 'user', content: userMessage }])
    setMessage('')

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()
      setConversation(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Error:', error)
      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="ai-assistant" className="py-16 bg-[#FF643B] relative overflow-hidden">
      {/* Background Crests */}
      <div className="absolute top-30 left-40 opacity-500">
        <div className="relative">
          <img src="/tree-icon.png" alt="Tree crest" className="w-10 h-10" />
          <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-6 h-6" />
        </div>
      </div>

      <div className="absolute top-5 right-5 opacity-50">
        <div className="relative">
          <img src="/tree-icon.png" alt="Tree crest" className="w-16 h-16" />
          <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-5 h-5" />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 opacity-50">
        <div className="relative">
          <img src="/tree-icon.png" alt="Tree crest" className="w-14 h-14" />
          <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-4 h-4" />
        </div>
      </div>

      <div className="absolute bottom-10 right-10 opacity-50">
        <div className="relative">
          <img src="/tree-icon.png" alt="Tree crest" className="w-18 h-18" />
          <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-5 h-5" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-dynapuff text-white mb-4">
            Get Your Travel Budget Estimate
          </h2>
          <p className="text-xl text-white">
            Chat with our AI assistant to get personalized budget estimates for your dream destinations. Ask about costs, best times to visit, and money-saving tips.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-80 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            {conversation.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FF643B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-gray-500">Hi there! I'm your Lyfe Travels assistant. How can I help you plan your next adventure?</p>
                <p className="text-sm text-gray-400 mt-2">Try asking about destinations, packages, or travel tips</p>
              </div>
            ) : (
              conversation.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-4 ${msg.role === 'user' ? 'bg-[#FF643B] text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block bg-gray-200 text-gray-800 rounded-lg p-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded-l-lg border-gray-300 border p-4 focus:ring-2 focus:ring-[#FF643B] focus:border-[#FF643B]"
              placeholder="Ask about travel destinations, packages, or recommendations..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#FF643B] text-white rounded-r-lg px-6 py-2 hover:bg-[#E55A35] disabled:opacity-50 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}