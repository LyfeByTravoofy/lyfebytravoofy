'use client'

import { useState } from 'react'


export default function AIAssistant() {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
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
    <section id="ai-assistant" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-dynapuff text-indigo-900 mb-4">
            Travel AI Assistant
          </h2>
          <p className="text-xl text-gray-600">
            Get personalized travel recommendations from our AI assistant.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-80 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
            {conversation.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-gray-500">Hi there! I'm your Lyfe Travels assistant. How can I help you plan your next adventure?</p>
                <p className="text-sm text-gray-400 mt-2">Try asking about destinations, packages, or travel tips</p>
              </div>
            ) : (
              conversation.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-4 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
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
              className="flex-1 rounded-l-lg border-gray-300 border p-4 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ask about travel destinations, packages, or recommendations..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-indigo-600 text-white rounded-r-lg px-6 py-2 hover:bg-indigo-700 disabled:opacity-50 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}