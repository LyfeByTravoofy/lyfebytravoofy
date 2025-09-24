// 'use client'

// import { useState } from 'react'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <span className="text-2xl font-dynapuff text-indigo-600">Lyfe Travels</span>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
//             <a href="#packages" className="text-gray-700 hover:text-indigo-600 transition">Packages</a>
//             <a href="#ai-assistant" className="text-gray-700 hover:text-indigo-600 transition">AI Assistant</a>
//             <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
//             <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Contact Us</a>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
//               {/* Hamburger icon */}
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
//             <a href="#packages" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Packages</a>
//             <a href="#ai-assistant" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">AI Assistant</a>
//             <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
//             <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact Us</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

'use client'

import { useState } from 'react'
// import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/logo.png" // Make sure this matches your logo file name in public folder
                alt="Lyfe Travels Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          {/* Navigation links - centered */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Add your navigation links here when needed */}
          </div>

          {/* WhatsApp button on the right - hidden on mobile */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/2347014952315" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DBF73] text-white px-4 py-2 rounded-md hover:bg-[#17a564] transition flex items-center space-x-2"
            >
              <span>Say hello on WhatsApp</span>
              <img
                src="/arrowup.png" // Make sure this matches your WhatsApp icon file name
                alt="WhatsApp"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
          </div>

          {/* Mobile menu button - shown only on mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {/* Hamburger icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="https://wa.me/2347014952315" 
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-[#1DBF73] text-white rounded mx-2 text-center"
            >
              Say hello on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}