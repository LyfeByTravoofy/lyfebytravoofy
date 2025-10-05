// // contexts/ChatContext.js
// 'use client'

// import { createContext, useContext, useState } from 'react'

// const ChatContext = createContext()

// export function ChatProvider({ children }) {
//   const [isChatOpen, setIsChatOpen] = useState(false)

//   return (
//     <ChatContext.Provider value={{ isChatOpen, setIsChatOpen }}>
//       {children}
//     </ChatContext.Provider>
//   )
// }

// export function useChat() {
//   const context = useContext(ChatContext)
//   if (!context) {
//     throw new Error('useChat must be used within a ChatProvider')
//   }
//   return context
// }\\

// contexts/ChatContext.js
'use client'

import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

export function ChatProvider({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const openChat = () => {
    // Check if we're on desktop (lg breakpoint) or mobile/tablet
    if (window.innerWidth >= 1024) {
      // Desktop - scroll to AI assistant section
      const aiSection = document.getElementById('ai-assistant')
      if (aiSection) {
        aiSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Mobile/tablet - open modal
      setIsChatOpen(true)
    }
  }

  return (
    <ChatContext.Provider value={{ 
      isChatOpen, 
      setIsChatOpen,
      openChat 
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}