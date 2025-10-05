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




// 'use client'

// import { useState } from 'react'

// export default function AIAssistant() {
//   const [message, setMessage] = useState('')
//   const [conversation, setConversation] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [isChatOpen, setIsChatOpen] = useState(false)

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
//     <>
//       {/* Mobile Chat Popup Overlay */}
//       {isChatOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 md:hidden"
//           onClick={() => setIsChatOpen(false)}
//         >
//           <div 
//             className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[85vh] overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
//               onClick={() => setIsChatOpen(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             {/* Chat Interface */}
//             <div className="h-full flex flex-col">
//               {/* Header with divider */}
//               <div className="p-4 border-b border-gray-200">
//                 <div className="flex items-center space-x-3">
//                   <img 
//                     src="/Planet.png" 
//                     alt="AI Assistant" 
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div>
//                     <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
//                     <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Chat Messages Area with divider */}
//               <div className="flex-1 overflow-y-auto p-4 border-b border-gray-200">
//                 {conversation.length === 0 ? (
//                   <div className="text-center py-8">
//                     <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <img 
//                         src="/ai-assistant-icon.png" 
//                         alt="AI Assistant" 
//                         className="w-6 h-6"
//                       />
//                     </div>
//                     <p className="text-gray-600 text-[12px]">
//                       Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
//                     </p>
//                   </div>
//                 ) : (
//                   <>
//                     {conversation.map((msg, index) => (
//                       <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//                         <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                           {msg.role === 'assistant' && (
//                             <img 
//                               src="/ai-assistant-icon.png" 
//                               alt="AI Assistant" 
//                               className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                             />
//                           )}
                          
//                           {/* Chat message bubble - wider now */}
//                           <div className={`max-w-[60%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
//                             <p className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
//                               {msg.content}
//                             </p>
//                           </div>

//                           {msg.role === 'user' && (
//                             <img 
//                               src="/user-profile-icon.png" 
//                               alt="User" 
//                               className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
//                             />
//                           )}
//                         </div>
                        
//                         {/* Timestamp - completely separate row below the message */}
//                         <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
//                           {msg.role === 'assistant' && (
//                             <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
//                           )}
                          
//                           <div className="max-w-[60%]">
//                             <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
//                               {msg.timestamp}
//                             </p>
//                           </div>

//                           {msg.role === 'user' && (
//                             <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </>
//                 )}

//                 {isLoading && (
//                   <div className="mb-3 text-left">
//                     <div className="flex justify-start">
//                       <img 
//                         src="/ai-assistant-icon.png" 
//                         alt="AI Assistant" 
//                         className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                       />
//                       <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
//                         <div className="flex space-x-1">
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Loading timestamp */}
//                     <div className="flex justify-start mt-1">
//                       <div className="w-6 h-6 mr-2 flex-shrink-0"></div> {/* Spacer */}
//                       <div className="max-w-[80%]">
//                         <p className="text-[10px] text-gray-500">
//                           {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Input Area */}
//               <div className="p-4">
//                 <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//                   <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
//                     placeholder="Ask about travel cost for any destination..."
//                     disabled={isLoading}
//                   />
//                   <button
//                     type="submit"
//                     disabled={isLoading || !message.trim()}
//                     className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition"
//                   >
//                     <img 
//                       src="/send-icon.png" 
//                       alt="Send" 
//                       className="w-4 h-4"
//                     />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Section */}
//       <section id="ai-assistant" className="py-16 bg-[#FF643B] relative overflow-hidden">
//         {/* Background Decorations */}
//         <div className="absolute top-10 left-0 opacity-70">
//           <div className="relative">
//             <img src="/tree-icon.png" alt="Tree crest" className="w-9 h-14" />
//             <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-3 h-4" />
//           </div>
//         </div>

//         <div className="absolute top-5 right-5 opacity-75">
//           <div className="relative">
//             <img src="/tree-icon.png" alt="Tree crest" className="w-25 h-60" />
//             <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-3 h-3" />
//           </div>
//         </div>

//         <div className="absolute bottom-5 left-0 opacity-70">
//           <div className="relative">
//             <img src="/tree-icon.png" alt="Tree crest" className="w-20 h-40" />
//             <img src="/location-icon2.png" alt="Location" className="absolute bottom-1 left-1 w-10 h-6" />
//           </div>
//         </div>

//         <div className="absolute bottom-10 right-10 opacity-70">
//           <div className="relative">
//             <img src="/tree-icon.png" alt="Tree crest" className="w-12 h-9" />
//             <img src="/location-icon2.png" alt="Location" className="absolute bottom-2 left-2 w-2 h-3" />
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-dynapuff text-white mb-4">
//               Get Your Travel<br className="md:hidden" /> Budget Estimate
//             </h2>
//             <p className="text-lg md:text-xl text-white max-w-4xl mx-auto px-2 md:px-0">
//               Chat with our AI assistant to get personalized <br className="hidden sm:block md:hidden" />
//                budget estimates for your dream destinations. <br className="hidden sm:block" />
//                Ask about costs, best times to visit, and <br className="hidden sm:block" />
//                money-saving tips.
//             </p>
//           </div>

//           {/* Desktop Chat Interface - hidden on mobile */}
//           <div className="hidden md:block bg-white rounded-lg shadow-lg w-[90%] mx-auto">
//             {/* Header with divider */}
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <img 
//                   src="/Planet.png" 
//                   alt="AI Assistant" 
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <div>
//                   <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
//                   <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
//                 </div>
//               </div>
//             </div>

//             {/* Chat Messages Area with divider */}
//             <div className="h-96 overflow-y-auto p-4 border-b border-gray-200">
//               {conversation.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <img 
//                       src="/ai-assistant-icon.png" 
//                       alt="AI Assistant" 
//                       className="w-6 h-6"
//                     />
//                   </div>
//                   <p className="text-gray-600 text-[12px]">
//                     Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
//                   </p>
//                 </div>
//               ) : (
//                 <>
//                   {conversation.map((msg, index) => (
//                     <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//                       <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                         {msg.role === 'assistant' && (
//                           <img 
//                             src="/ai-assistant-icon.png" 
//                             alt="AI Assistant" 
//                             className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                           />
//                         )}
                        
//                         {/* Chat message bubble - wider now */}
//                         <div className={`max-w-[60%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
//                           <p className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
//                             {msg.content}
//                           </p>
//                         </div>

//                         {msg.role === 'user' && (
//                           <img 
//                             src="/user-profile-icon.png" 
//                             alt="User" 
//                             className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
//                           />
//                         )}
//                       </div>
                      
//                       {/* Timestamp - completely separate row below the message */}
//                       <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
//                         {msg.role === 'assistant' && (
//                           <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
//                         )}
                        
//                         <div className="max-w-[60%]">
//                           <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
//                             {msg.timestamp}
//                           </p>
//                         </div>

//                         {msg.role === 'user' && (
//                           <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </>
//               )}

//               {isLoading && (
//                 <div className="mb-3 text-left">
//                   <div className="flex justify-start">
//                     <img 
//                       src="/ai-assistant-icon.png" 
//                       alt="AI Assistant" 
//                       className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                     />
//                     <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
//                       <div className="flex space-x-1">
//                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Loading timestamp */}
//                   <div className="flex justify-start mt-1">
//                     <div className="w-6 h-6 mr-2 flex-shrink-0"></div> {/* Spacer */}
//                     <div className="max-w-[80%]">
//                       <p className="text-[10px] text-gray-500">
//                         {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input Area */}
//             <div className="p-4">
//               <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
//                   placeholder="Ask about travel cost for any destination..."
//                   disabled={isLoading}
//                 />
//                 <button
//                   type="submit"
//                   disabled={isLoading || !message.trim()}
//                   className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition"
//                 >
//                   <img 
//                     src="/send-icon.png" 
//                     alt="Send" 
//                     className="w-4 h-4"
//                   />
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Mobile Button to Open Chat - only visible on mobile */}
//           <div className="md:hidden flex justify-center mt-8">
//             <button 
//               onClick={() => setIsChatOpen(true)}
//               className="bg-[#1C1918] text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
//             >
//               <span>Explore AI Chat Box</span>
//               <img 
//                 src="/Planet.png" 
//                 alt="Planet" 
//                 className="w-5 h-5"
//               />
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// 'use client'

// import { useState, useEffect, useRef, useCallback } from 'react'
// import ReactMarkdown from 'react-markdown'

// export default function AIAssistant() {
//   const [message, setMessage] = useState('')
//   const [conversation, setConversation] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [isChatOpen, setIsChatOpen] = useState(false)
  
//   // Refs
//   const messagesEndRef = useRef(null)
//   const messagesContainerRef = useRef(null)

//   // Bulletproof scroll to bottom function
//   const scrollToBottom = useCallback(() => {
//     if (messagesContainerRef.current) {
//       const container = messagesContainerRef.current
//       // Use multiple methods to ensure it works
//       setTimeout(() => {
//         container.scrollTop = container.scrollHeight
        
//         // Alternative method if first doesn't work
//         setTimeout(() => {
//           if (container.scrollTop + container.clientHeight < container.scrollHeight - 10) {
//             container.scrollTop = container.scrollHeight
//           }
//         }, 50)
//       }, 100)
//     }
//   }, [])

//   // Auto-scroll when conversation changes
//   useEffect(() => {
//     if (conversation.length > 0) {
//       scrollToBottom()
//     }
//   }, [conversation, scrollToBottom])

//   // Scroll when loading state changes
//   useEffect(() => {
//     if (isLoading) {
//       scrollToBottom()
//     }
//   }, [isLoading, scrollToBottom])

//   // Scroll when modal opens
//   useEffect(() => {
//     if (isChatOpen) {
//       setTimeout(() => {
//         scrollToBottom()
//       }, 300)
//     }
//   }, [isChatOpen, scrollToBottom])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!message.trim()) return

//     setIsLoading(true)
//     const userMessage = message
//     const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
//     const updatedConversation = [...conversation, { 
//       role: 'user', 
//       content: userMessage,
//       timestamp: userTimestamp
//     }]
    
//     setConversation(updatedConversation)
//     setMessage('')

//     try {
//       const response = await fetch('/api/ai-assistant', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           message: userMessage,
//           conversation: updatedConversation
//         }),
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

//   // Force scroll when input is focused (for mobile keyboard)
//   const handleInputFocus = () => {
//     setTimeout(scrollToBottom, 500)
//   }

//   // Manual scroll button as fallback
//   const handleManualScroll = () => {
//     scrollToBottom()
//   }

//   // Custom components for ReactMarkdown
//   const markdownComponents = {
//     p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
//     strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
//     em: ({node, ...props}) => <em className="italic" {...props} />,
//     ul: ({node, ...props}) => <ul className="list-disc list-inside mb-3 space-y-1" {...props} />,
//     ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-3 space-y-1" {...props} />,
//     li: ({node, ...props}) => <li className="ml-2" {...props} />,
//     h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-3 text-gray-900" {...props} />,
//     h2: ({node, ...props}) => <h2 className="text-md font-bold mb-2 text-gray-900" {...props} />,
//     h3: ({node, ...props}) => <h3 className="text-base font-bold mb-2 text-gray-900" {...props} />,
//     blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-3 my-2 text-gray-600" {...props} />,
//     hr: ({node, ...props}) => <hr className="my-3 border-gray-200" {...props} />,
//   }

//   return (
//     <>
//       {/* Mobile & Tablet Chat Popup Overlay */}
//       {isChatOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 lg:hidden"
//           onClick={() => setIsChatOpen(false)}
//         >
//           <div 
//             className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] flex flex-col"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20 bg-white rounded-full p-1 shadow-lg"
//               onClick={() => setIsChatOpen(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* Manual scroll button as fallback */}
//             {conversation.length > 2 && (
//               <button
//                 onClick={handleManualScroll}
//                 className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 z-20 bg-white rounded-full p-1 shadow-lg"
//                 title="Scroll to bottom"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//               </button>
//             )}
            
//             {/* Chat Interface */}
//             <div className="h-full flex flex-col">
//               {/* Header */}
//               <div className="p-4 border-b border-gray-200 flex-shrink-0">
//                 <div className="flex items-center space-x-3">
//                   <img 
//                     src="/Planet.png" 
//                     alt="AI Assistant" 
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div>
//                     <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
//                     <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Chat Messages Area */}
//               <div 
//                 ref={messagesContainerRef}
//                 className="flex-1 overflow-y-auto p-4"
//                 style={{ 
//                   WebkitOverflowScrolling: 'touch',
//                 }}
//               >
//                 {conversation.length === 0 ? (
//                   <div className="text-center py-8">
//                     <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <img 
//                         src="/ai-assistant-icon.png" 
//                         alt="AI Assistant" 
//                         className="w-6 h-6"
//                       />
//                     </div>
//                     <p className="text-gray-600 text-[12px]">
//                       Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {conversation.map((msg, index) => (
//                       <div key={index} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//                         <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start`}>
//                           {msg.role === 'assistant' && (
//                             <img 
//                               src="/ai-assistant-icon.png" 
//                               alt="AI Assistant" 
//                               className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                             />
//                           )}
                          
//                           <div className={`max-w-[80%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
//                             <div className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
//                               {msg.role === 'assistant' ? (
//                                 <ReactMarkdown components={markdownComponents}>
//                                   {msg.content}
//                                 </ReactMarkdown>
//                               ) : (
//                                 <div className="whitespace-pre-wrap">{msg.content}</div>
//                               )}
//                             </div>
//                           </div>

//                           {msg.role === 'user' && (
//                             <img 
//                               src="/user-profile-icon.png" 
//                               alt="User" 
//                               className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
//                             />
//                           )}
//                         </div>
                        
//                         <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
//                           {msg.role === 'assistant' && (
//                             <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
//                           )}
                          
//                           <div className="max-w-[80%]">
//                             <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
//                               {msg.timestamp}
//                             </p>
//                           </div>

//                           {msg.role === 'user' && (
//                             <div className="w-6 h-6 ml-2 flex-shrink-0"></div> 
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isLoading && (
//                   <div className="text-left mt-4">
//                     <div className="flex justify-start items-start">
//                       <img 
//                         src="/ai-assistant-icon.png" 
//                         alt="AI Assistant" 
//                         className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
//                       />
//                       <div className="max-w-[80%] bg-gray-100 rounded-lg p-3">
//                         <div className="flex space-x-1">
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-start mt-1">
//                       <div className="w-6 h-6 mr-2 flex-shrink-0"></div>
//                       <div className="max-w-[80%]">
//                         <p className="text-[10px] text-gray-500">
//                           {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Scroll anchor */}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input Area */}
//               <div className="p-4 border-t border-gray-200 flex-shrink-0 bg-white">
//                 <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//                   <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onFocus={handleInputFocus}
//                     className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-[12px] border-none focus:ring-0 focus:outline-none"
//                     placeholder="Ask about travel cost for any destination..."
//                     disabled={isLoading}
//                   />
//                   <button
//                     type="submit"
//                     disabled={isLoading || !message.trim()}
//                     className="bg-[#818089] text-white rounded-lg p-2 hover:bg-[#9E9E9E] disabled:opacity-50 disabled:cursor-not-allowed transition flex-shrink-0"
//                   >
//                     <img 
//                       src="/send-icon.png" 
//                       alt="Send" 
//                       className="w-4 h-4"
//                     />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}





'use client'

import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { useChat } from '@/contexts/ChatContext'

export default function AIAssistant() {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [isChatOpen, setIsChatOpen] = useState(false)
  const { isChatOpen, setIsChatOpen } = useChat()
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
  
  // Refs
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll when conversation or loading changes
  useEffect(() => {
    scrollToBottom()
  }, [conversation, isLoading, isChatOpen])

  // Handle keyboard open/close for mobile
  useEffect(() => {
    const handleResize = () => {
      const isKeyboardOpen = window.visualViewport?.height < window.screen.height * 0.7
      setIsKeyboardVisible(isKeyboardOpen)
      if (isKeyboardOpen) {
        setTimeout(scrollToBottom, 150)
      }
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize)
    }

    const input = inputRef.current
    if (input) {
      input.addEventListener('focus', () => setIsKeyboardVisible(true))
      input.addEventListener('blur', () => setIsKeyboardVisible(false))
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize)
      }
      if (input) {
        input.removeEventListener('focus', () => setIsKeyboardVisible(true))
        input.removeEventListener('blur', () => setIsKeyboardVisible(false))
      }
    }
  }, [isChatOpen])

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight
      }
    }, 50)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    const userMessage = message
    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    const updatedConversation = [...conversation, { 
      role: 'user', 
      content: userMessage,
      timestamp: userTimestamp
    }]
    
    setConversation(updatedConversation)
    setMessage('')

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, conversation: updatedConversation }),
      })

      if (!response.ok) throw new Error('Failed to get response')

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

  const markdownComponents = {
    p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
    strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
    em: ({node, ...props}) => <em className="italic" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-3 space-y-1" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-3 space-y-1" {...props} />,
    li: ({node, ...props}) => <li className="ml-2" {...props} />,
    h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-3 text-gray-900" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-md font-bold mb-2 text-gray-900" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-base font-bold mb-2 text-gray-900" {...props} />,
    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-3 my-2 text-gray-600" {...props} />,
    hr: ({node, ...props}) => <hr className="my-3 border-gray-200" {...props} />,
  }

  return (
    <>
      {/* Mobile & Tablet Chat Popup Overlay */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsChatOpen(false)}
        >
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 transition-all duration-300 
              ${isKeyboardVisible ? 'h-[95vh]' : 'h-[85vh]'} flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setIsChatOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Chat Interface */}
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img src="/Planet.png" alt="AI Assistant" className="w-8 h-8 rounded-full"/>
                  <div>
                    <h2 className="font-bold text-gray-900 text-[12px]">Travel Budget AI Assistant</h2>
                    <p className="text-gray-500 text-[11px]">Ask me about travel costs for any destination worldwide</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 border-b border-gray-200 min-h-0"
                style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
              >
                {conversation.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src="/ai-assistant-icon.png" alt="AI Assistant" className="w-6 h-6"/>
                    </div>
                    <p className="text-gray-600 text-[12px]">
                      Hi there! I'm your AI travel assistant. How can I help you plan your next adventure?
                    </p>
                  </div>
                ) : (
                  <>
                    {conversation.map((msg, index) => (
                      <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          {msg.role === 'assistant' && (
                            <img src="/ai-assistant-icon.png" alt="AI Assistant" 
                              className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"/>
                          )}
                          <div className={`max-w-[75%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
                            <div className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
                              {msg.role === 'assistant' ? (
                                <ReactMarkdown components={markdownComponents}>
                                  {msg.content}
                                </ReactMarkdown>
                              ) : (
                                <div className="whitespace-pre-wrap">{msg.content}</div>
                              )}
                            </div>
                          </div>
                          {msg.role === 'user' && (
                            <img src="/user-profile-icon.png" alt="User" 
                              className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"/>
                          )}
                        </div>
                        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
                          {msg.role === 'assistant' && <div className="w-6 h-6 mr-2 flex-shrink-0"></div>}
                          <div className="max-w-[75%]">
                            <p className={`text-[10px] ${msg.role === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {msg.timestamp}
                            </p>
                          </div>
                          {msg.role === 'user' && <div className="w-6 h-6 ml-2 flex-shrink-0"></div>}
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {isLoading && (
                  <div className="mb-4 text-left">
                    <div className="flex justify-start">
                      <img src="/ai-assistant-icon.png" alt="AI Assistant" 
                        className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"/>
                      <div className="max-w-[75%] bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start mt-1">
                      <div className="w-6 h-6 mr-2 flex-shrink-0"></div>
                      <div className="max-w-[75%]">
                        <p className="text-[10px] text-gray-500">
                          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area (sticky) */}
              <div className="p-4 bg-white sticky bottom-0">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
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
                    <img src="/send-icon.png" alt="Send" className="w-4 h-4"/>
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
            <h2 className="text-3xl lg:text-4xl font-dynapuff text-white mb-4">
              Get Your Travel<br className="lg:hidden" /> Budget Estimate
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-4xl mx-auto px-2 lg:px-0">
              Chat with our AI assistant to get personalized <br className="hidden sm:block lg:hidden" />
               budget estimates for your dream destinations. <br className="hidden sm:block" />
               Ask about costs, best times to visit, and <br className="hidden sm:block" />
               money-saving tips.
            </p>
          </div>

          {/* Desktop Chat Interface - hidden on mobile & tablet */}
          <div className="hidden lg:block bg-white rounded-lg shadow-lg w-[90%] mx-auto">
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
                    <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'assistant' && (
                          <img 
                            src="/ai-assistant-icon.png" 
                            alt="AI Assistant" 
                            className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                          />
                        )}
                        
                        {/* Chat message bubble with ReactMarkdown */}
                        <div className={`max-w-[75%] ${msg.role === 'user' ? 'bg-[#030213]' : 'bg-gray-100'} rounded-lg p-3`}>
                          <div className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-gray-900'}`}>
                            {msg.role === 'assistant' ? (
                              <ReactMarkdown components={markdownComponents}>
                                {msg.content}
                              </ReactMarkdown>
                            ) : (
                              <div className="whitespace-pre-wrap">{msg.content}</div>
                            )}
                          </div>
                        </div>

                        {msg.role === 'user' && (
                          <img 
                            src="/user-profile-icon.png" 
                            alt="User" 
                            className="w-6 h-6 rounded-full mt-1 ml-2 flex-shrink-0"
                          />
                        )}
                      </div>
                      
                      {/* Timestamp */}
                      <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mt-1`}>
                        {msg.role === 'assistant' && (
                          <div className="w-6 h-6 mr-2 flex-shrink-0"></div> 
                        )}
                        
                        <div className="max-w-[75%]">
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
                <div className="mb-4 text-left">
                  <div className="flex justify-start">
                    <img 
                      src="/ai-assistant-icon.png" 
                      alt="AI Assistant" 
                      className="w-6 h-6 rounded-full mt-1 mr-2 flex-shrink-0"
                    />
                    <div className="max-w-[75%] bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading timestamp */}
                  <div className="flex justify-start mt-1">
                    <div className="w-6 h-6 mr-2 flex-shrink-0"></div>
                    <div className="max-w-[75%]">
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

          {/* Mobile & Tablet Button to Open Chat - visible on mobile & tablet */}
          <div className="lg:hidden flex justify-center mt-8">
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