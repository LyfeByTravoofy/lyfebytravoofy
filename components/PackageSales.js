// 'use client'

// import { useState, useEffect } from 'react'


// export default function PackageSales() {
//   const [packages, setPackages] = useState([])

//   useEffect(() => {
//     // Fetch packages from API
//     fetch('/api/packages')
//       .then(res => res.json())
//       .then(data => setPackages(data))
//       .catch(err => console.error('Error fetching packages:', err))
//   }, [])

//   return (
//     <section id="packages" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-dynapuff text-indigo-900 mb-4">
//             Our Travel Packages
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our handpicked selection of travel experiences tailored to create unforgettable memories.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {packages.map((pkg) => (
//             <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
//                   <span className="text-2xl font-dynapuff text-indigo-600">${pkg.price}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{pkg.description}</p>
//                 <div className="mb-6">
//                   <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
//                   <ul className="list-disc list-inside text-gray-600 space-y-1">
//                     {pkg.features.split(',').map((feature, i) => (
//                       <li key={i}>{feature.trim()}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {packages.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No packages available at the moment. Check back soon!</p>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }




'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// interface Package {
//   id: string
//   name: string
//   price: string
//   description: string
//   features: string
//   location: string
//   image_url: string
//   inclusions: string[]
// }

export default function PackageSales() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/packages')
      if (response.ok) {
        const data = await response.json()
        setPackages(data)
      }
    } catch (error) {
      console.error('Error fetching packages:', error)
    } finally {
      setLoading(false)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-[#FAF69D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading packages...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-[#FAF69D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
            Packages on Sale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl text-left">
            Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
          </p>
        </div>

        {/* Packages with scroll arrows */}
        <div className="relative">
          {/* Left arrow - desktop only */}
          <button
            onClick={scrollLeft}
            className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pkg) => (
              <div key={pkg.id} className="flex-shrink-0 w-full md:w-[358px] bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Image */}
                <div className="w-full h-[268px] relative">
                  <Image
                    src={pkg.image_url}
                    alt={pkg.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
                    <div className="flex items-center space-x-1">
                      <img src="/location-icon.png" alt="Location" className="w-4 h-4" />
                      <span className="text-sm text-gray-600">{pkg.location}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <img src="/check-icon.png" alt="Included" className="w-4 h-4" />
                          <span className="text-sm text-gray-700">{inclusion}</span>
                        </li>
                      ))}
                      {pkg.inclusions.length > 3 && (
                        <li className="text-sm text-gray-600">+{pkg.inclusions.length - 3} more inclusions</li>
                      )}
                    </ul>
                  </div>

                  {/* Book Now button */}
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
                    <span>Book Now</span>
                    <img src="/arrowup.png" alt="Arrow" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow - desktop only */}
          <button
            onClick={scrollRight}
            className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile scroll indicator */}
        {packages.length > 1 && (
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-gray-600">Swipe to view more packages</p>
          </div>
        )}
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}