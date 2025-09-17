// 'use client'

// import { useState } from 'react'

// export default function AIAssistant() {
//   const [message, setMessage] = useState('')
//   const [conversation, setConversation] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!message.trim()) return

//     setIsLoading(true)
//     const userMessage = message
//     const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
//     setConversation((prev) => [...prev, { 
//       role: 'user', 
//       content: userMessage,
//       timestamp: userTimestamp
//     }])
//     setMessage('')

//     try {
//       const response = await fetch('/api/ai-assistant', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: userMessage }),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to get response')
//       }

//       const data = await response.json()
//       const aiTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
//       setConversation((prev) => [...prev, { 
//         role: 'assistant', 
//         content: data.response,
//         timestamp: aiTimestamp
//       }])
//     } catch (error) {
//       console.error('Error:', error)
//       const errorTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
//       setConversation((prev) => [
//         ...prev,
//         {
//           role: 'assistant',
//           content: 'Sorry, I encountered an error. Please try again.',
//           timestamp: errorTimestamp
//         },
//       ])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <section id="ai-assistant" className="py-16 bg-[#FF643B] relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-10 left-0 opacity-70">
//         <div className="relative">
//           <img src="/tree-icon.png" alt="Tree crest" className="w-9 h-14" />
//           <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-3 h-4" />
//         </div>
//       </div>

//       <div className="absolute top-5 right-5 opacity-75">
//         <div className="relative">
//           <img src="/tree-icon.png" alt="Tree crest" className="w-25 h-60" />
//           <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-3 h-3" />
//         </div>
//       </div>

//       <div className="absolute bottom-5 left-0 opacity-70">
//         <div className="relative">
//           <img src="/tree-icon.png" alt="Tree crest" className="w-20 h-40" />
//           <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-10 h-6" />
//         </div>
//       </div>

//       <div className="absolute bottom-10 right-10 opacity-70">
//         <div className="relative">
//           <img src="/tree-icon.png" alt="Tree crest" className="w-12 h-9" />
//           <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-2 h-3" />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-dynapuff text-white mb-4">
//             Get Your Travel Budget Estimate
//           </h2>
//             <p className="text-lg md:text-xl text-white max-w-4xl mx-auto">
//               Chat with our AI assistant to get personalized budget estimates for your dream destinations. 
//               Ask about costs, best times to visit, and money-saving tips.
//             </p>
//         </div>

//         {/* Chat Interface Container - 90% width */}
//         <div className="bg-white rounded-lg shadow-lg w-[90%] mx-auto">
//           {/* Header with divider */}
//           <div className="p-4 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <img 
//                 src="/Planet.png" 
//                 alt="AI Assistant" 
//                 className="w-8 h-8 rounded-full"
//               />
//               <div>
//                 <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
//                 <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
//               </div>
//             </div>
//           </div>

//           {/* Chat Messages Area with divider */}
//           <div className="h-96 overflow-y-auto p-4 border-b border-gray-200">
//             {conversation.length === 0 ? (
//               <div className="text-center py-8">
//                 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <img 
//                     src="/ai-assistant-icon.png" 
//                     alt="AI Assistant" 
//                     className="w-6 h-6"
//                   />
//                 </div>
//                 <p className="text-gray-600 text-[12px]">
//                   Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
//                 </p>
//               </div>
//             ) : (
//               <>
//                 {conversation.map((msg, index) => (
//                   <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//                     <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                       {msg.role === 'assistant' && (
//                         <img 
//                           src="/ai-assistant-icon.png" 
//                           alt="AI Assistant" 
//                           className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                         />
//                       )}
                      
//                       {/* Chat message bubble - wider now */}
//                       <div className={`max-w-[60%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
//                         <p className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
//                           {msg.content}
//                         </p>
//                       </div>

//                       {msg.role === 'user' && (
//                         <img 
//                           src="/user-profile-icon.png" 
//                           alt="User" 
//                           className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
//                         />
//                       )}
//                     </div>
                    
//                     {/* Timestamp - completely separate row below the message */}
//                     <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
//                       {msg.role === 'assistant' && (
//                         <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
//                       )}
                      
//                       <div className="max-w-[60%]">
//                         <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
//                           {msg.timestamp}
//                         </p>
//                       </div>

//                       {msg.role === 'user' && (
//                         <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}

//             {isLoading && (
//               <div className="mb-3 text-left">
//                 <div className="flex justify-start">
//                   <img 
//                     src="/ai-assistant-icon.png" 
//                     alt="AI Assistant" 
//                     className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                   />
//                   <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Loading timestamp */}
//                 <div className="flex justify-start mt-1">
//                   <div className="w-6 h-6 mr-2 flex-shrink-0"></div> {/* Spacer */}
//                   <div className="max-w-[80%]">
//                     <p className="text-[10px] text-gray-500">
//                       {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input Area */}
//           <div className="p-4">
//             <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
//                 placeholder="Ask about travel cost for any destination..."
//                 disabled={isLoading}
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading || !message.trim()}
//                 className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition"
//               >
//                 <img 
//                   src="/send-icon.png" 
//                   alt="Send" 
//                   className="w-4 h-4"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'

import { useState } from 'react'

export default function AIAssistant() {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    const userMessage = message
    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    setConversation((prev) => [...prev, { 
      role: 'user', 
      content: userMessage,
      timestamp: userTimestamp
    }])
    setMessage('')

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const aiTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
      setConversation((prev) => [...prev, { 
        role: 'assistant', 
        content: data.response,
        timestamp: aiTimestamp
      }])
    } catch (error) {
      console.error('Error:', error)
      const errorTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
      setConversation((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: errorTimestamp
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Mobile Chat Popup Overlay */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsChatOpen(false)}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setIsChatOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Chat Interface */}
            <div className="h-full flex flex-col">
              {/* Header with divider */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/Planet.png" 
                    alt="AI Assistant" 
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
                    <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages Area with divider */}
              <div className="flex-1 overflow-y-auto p-4 border-b border-gray-200">
                {conversation.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img 
                        src="/ai-assistant-icon.png" 
                        alt="AI Assistant" 
                        className="w-6 h-6"
                      />
                    </div>
                    <p className="text-gray-600 text-[12px]">
                      Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
                    </p>
                  </div>
                ) : (
                  <>
                    {conversation.map((msg, index) => (
                      <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          {msg.role === 'assistant' && (
                            <img 
                              src="/ai-assistant-icon.png" 
                              alt="AI Assistant" 
                              className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                            />
                          )}
                          
                          {/* Chat message bubble - wider now */}
                          <div className={`max-w-[60%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
                            <p className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
                              {msg.content}
                            </p>
                          </div>

                          {msg.role === 'user' && (
                            <img 
                              src="/user-profile-icon.png" 
                              alt="User" 
                              className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
                            />
                          )}
                        </div>
                        
                        {/* Timestamp - completely separate row below the message */}
                        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
                          {msg.role === 'assistant' && (
                            <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
                          )}
                          
                          <div className="max-w-[60%]">
                            <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {msg.timestamp}
                            </p>
                          </div>

                          {msg.role === 'user' && (
                            <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {isLoading && (
                  <div className="mb-3 text-left">
                    <div className="flex justify-start">
                      <img 
                        src="/ai-assistant-icon.png" 
                        alt="AI Assistant" 
                        className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                      />
                      <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Loading timestamp */}
                    <div className="flex justify-start mt-1">
                      <div className="w-6 h-6 mr-2 flex-shrink-0"></div> {/* Spacer */}
                      <div className="max-w-[80%]">
                        <p className="text-[10px] text-gray-500">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
                    placeholder="Ask about travel cost for any destination..."
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !message.trim()}
                    className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <img 
                      src="/send-icon.png" 
                      alt="Send" 
                      className="w-4 h-4"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <section id="ai-assistant" className="py-16 bg-[#FF643B] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-10 left-0 opacity-70">
          <div className="relative">
            <img src="/tree-icon.png" alt="Tree crest" className="w-9 h-14" />
            <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-3 h-4" />
          </div>
        </div>

        <div className="absolute top-5 right-5 opacity-75">
          <div className="relative">
            <img src="/tree-icon.png" alt="Tree crest" className="w-25 h-60" />
            <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-3 h-3" />
          </div>
        </div>

        <div className="absolute bottom-5 left-0 opacity-70">
          <div className="relative">
            <img src="/tree-icon.png" alt="Tree crest" className="w-20 h-40" />
            <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-10 h-6" />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 opacity-70">
          <div className="relative">
            <img src="/tree-icon.png" alt="Tree crest" className="w-12 h-9" />
            <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-2 h-3" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-dynapuff text-white mb-4">
              Get Your Travel<br className="md:hidden" /> Budget Estimate
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto px-2 md:px-0">
              Chat with our AI assistant to get personalized <br className="hidden sm:block md:hidden" />
               budget estimates for your dream destinations. <br className="hidden sm:block" />
               Ask about costs, best times to visit, and <br className="hidden sm:block" />
               money-saving tips.
            </p>
          </div>

          {/* Desktop Chat Interface - hidden on mobile */}
          <div className="hidden md:block bg-white rounded-lg shadow-lg w-[90%] mx-auto">
            {/* Header with divider */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img 
                  src="/Planet.png" 
                  alt="AI Assistant" 
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
                  <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
                </div>
              </div>
            </div>

            {/* Chat Messages Area with divider */}
            <div className="h-96 overflow-y-auto p-4 border-b border-gray-200">
              {conversation.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <img 
                      src="/ai-assistant-icon.png" 
                      alt="AI Assistant" 
                      className="w-6 h-6"
                    />
                  </div>
                  <p className="text-gray-600 text-[12px]">
                    Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
                  </p>
                </div>
              ) : (
                <>
                  {conversation.map((msg, index) => (
                    <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'assistant' && (
                          <img 
                            src="/ai-assistant-icon.png" 
                            alt="AI Assistant" 
                            className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                          />
                        )}
                        
                        {/* Chat message bubble - wider now */}
                        <div className={`max-w-[60%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
                          <p className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
                            {msg.content}
                          </p>
                        </div>

                        {msg.role === 'user' && (
                          <img 
                            src="/user-profile-icon.png" 
                            alt="User" 
                            className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
                          />
                        )}
                      </div>
                      
                      {/* Timestamp - completely separate row below the message */}
                      <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
                        {msg.role === 'assistant' && (
                          <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
                        )}
                        
                        <div className="max-w-[60%]">
                          <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {msg.timestamp}
                          </p>
                        </div>

                        {msg.role === 'user' && (
                          <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}

              {isLoading && (
                <div className="mb-3 text-left">
                  <div className="flex justify-start">
                    <img 
                      src="/ai-assistant-icon.png" 
                      alt="AI Assistant" 
                      className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                    />
                    <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading timestamp */}
                  <div className="flex justify-start mt-1">
                    <div className="w-6 h-6 mr-2 flex-shrink-0"></div> {/* Spacer */}
                    <div className="max-w-[80%]">
                      <p className="text-[10px] text-gray-500">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
                  placeholder="Ask about travel cost for any destination..."
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <img 
                    src="/send-icon.png" 
                    alt="Send" 
                    className="w-4 h-4"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Button to Open Chat - only visible on mobile */}
          <div className="md:hidden flex justify-center mt-8">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-[#1C1918] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
            >
              <span>Explore AI Chat Box</span>
              <img 
                src="/Planet.png" 
                alt="Planet" 
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}