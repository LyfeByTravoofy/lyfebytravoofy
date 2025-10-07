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




// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// // interface Package {
// //   id: string
// //   name: string
// //   price: string
// //   description: string
// //   features: string
// //   location: string
// //   image_url: string
// //   inclusions: string[]
// // }

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(true)
//   const scrollContainerRef = useRef(null)

//   useEffect(() => {
//     fetchPackages()
//   }, [])

//   const fetchPackages = async () => {
//     try {
//       const response = await fetch('/api/packages')
//       if (response.ok) {
//         const data = await response.json()
//         setPackages(data)
//       }
//     } catch (error) {
//       console.error('Error fetching packages:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
//     }
//   }

//   if (loading) {
//     return (
//       <section className="py-16 bg-[#FAF69D]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p>Loading packages...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl text-left">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Packages with scroll arrows */}
//         <div className="relative">
//           {/* Left arrow - desktop only */}
//           <button
//             onClick={scrollLeft}
//             className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Scroll container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {packages.map((pkg) => (
//               <div key={pkg.id} className="flex-shrink-0 w-full md:w-[358px] bg-white rounded-2xl overflow-hidden shadow-lg">
//                 {/* Image */}
//                 <div className="w-full h-[268px] relative">
//                   <Image
//                     src={pkg.image_url}
//                     alt={pkg.name}
//                     fill
//                     className="object-cover rounded-t-2xl"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Location */}
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
//                     <div className="flex items-center space-x-1">
//                       <img src="/location-icon.png" alt="Location" className="w-4 h-4" />
//                       <span className="text-sm text-gray-600">{pkg.location}</span>
//                     </div>
//                   </div>

//                   {/* Price */}
//                   <div className="mb-4">
//                     <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                     <p className="text-sm text-gray-600">per person</p>
//                   </div>

//                   {/* Inclusions */}
//                   <div className="mb-6">
//                     <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                     <ul className="space-y-1">
//                       {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                         <li key={index} className="flex items-center space-x-2">
//                           <img src="/check-icon.png" alt="Included" className="w-4 h-4" />
//                           <span className="text-sm text-gray-700">{inclusion}</span>
//                         </li>
//                       ))}
//                       {pkg.inclusions.length > 3 && (
//                         <li className="text-sm text-gray-600">+{pkg.inclusions.length - 3} more inclusions</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Book Now button */}
//                   <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                     <span>Book Now</span>
//                     <img src="/arrowup.png" alt="Arrow" className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right arrow - desktop only */}
//           <button
//             onClick={scrollRight}
//             className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile scroll indicator */}
//         {packages.length > 1 && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages</p>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }



// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(false) // Set to false since we're using dummy data
//   const scrollContainerRef = useRef(null)

//   useEffect(() => {
//     // Use dummy data instead of fetching from API
//     setPackages([
//       {
//         id: '1',
//         name: 'Zanzibar Paradise',
//         price: '1,598,000',
//         description: 'Experience the beautiful beaches and rich culture of Zanzibar',
//         features: 'Beachfront resort, guided tours, spa treatments',
//         location: 'Tanzania',
//         image_url: 'package1.png',
//         inclusions: ['Round trip flights', '6 Nights accommodation', 'Daily breakfast', 'Island tour', 'Spa treatment', 'Airport transfers']
//       },
//       {
//         id: '2', 
//         name: 'Santorini Escape',
//         price: '2,250,000',
//         description: 'Luxury getaway to the stunning Greek islands',
//         features: '5-star hotel, private transfers, wine tasting',
//         location: 'Greece',
//         image_url: 'package2.png',
//         inclusions: ['Business class flights', '5 Nights luxury hotel', 'Private transfers', 'Wine tasting tour', 'Sunset cruise', 'Gourmet meals']
//       },
//       {
//         id: '3',
//         name: 'Bali Adventure',
//         price: '1,200,000',
//         description: 'Explore the natural beauty and culture of Bali',
//         features: 'Jungle retreat, temple visits, water activities',
//         location: 'Indonesia',
//         image_url: 'package3.png',
//         inclusions: ['Economy flights', '7 Nights villa stay', 'Temple tours', 'Water sports', 'Cultural shows', 'Local guides']
//       }
//     ])
//     setLoading(false)
//   }, [])

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
//     }
//   }

//   if (loading) {
//     return (
//       <section className="py-16 bg-[#FAF69D]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p>Loading packages...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl text-left">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Packages with scroll arrows */}
//         <div className="relative">
//           {/* Left arrow - desktop only */}
//           <button
//             onClick={scrollLeft}
//             className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Scroll container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {packages.map((pkg) => (
//               <div key={pkg.id} className="flex-shrink-0 w-full md:w-[358px] bg-white rounded-2xl overflow-hidden shadow-lg">
//                 {/* Image */}
// <div className="w-full h-[268px] relative">
//   <Image
//     src={`/packages/${pkg.image_url}`}
//     alt={pkg.name}
//     fill
//     className="object-cover rounded-t-2xl"
//     // onError={(e) => {
//     //   // Fallback if image fails to load
//     //   e.target.style.display = 'none'
//     //   e.target.nextSibling.style.display = 'flex'
//     // }}
//   />
//   {/* Fallback placeholder - hidden by default, shows if image fails */}
//   {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center hidden">
//     <span className="text-white font-semibold text-lg">{pkg.name}</span>
//   </div> */}
// </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Location */}
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
//                     <div className="flex items-center space-x-1">
//                       <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
//                         <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                       </div>
//                       <span className="text-sm text-gray-600">{pkg.location}</span>
//                     </div>
//                   </div>

//                   {/* Price */}
//                   <div className="mb-4">
//                     <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                     <p className="text-sm text-gray-600">per person</p>
//                   </div>

//                   {/* Inclusions */}
//                   <div className="mb-6">
//                     <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                     <ul className="space-y-1">
//                       {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                         <li key={index} className="flex items-center space-x-2">
//                           <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
//                             <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                           <span className="text-sm text-gray-700">{inclusion}</span>
//                         </li>
//                       ))}
//                       {pkg.inclusions.length > 3 && (
//                         <li className="text-sm text-gray-600">+{pkg.inclusions.length - 3} more inclusions</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Book Now button */}
//                   <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                     <span>Book Now</span>
//                     <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
//                       <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right arrow - desktop only */}
//           <button
//             onClick={scrollRight}
//             className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile scroll indicator */}
//         {packages.length > 1 && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages</p>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(true) // Set to true initially to show loading
//   const scrollContainerRef = useRef(null)

//   useEffect(() => {
//     fetchPackages()
//   }, [])

//   const fetchPackages = async () => {
//     try {
//       const response = await fetch('/api/packages')
//       if (response.ok) {
//         const data = await response.json()
//         setPackages(data)
//       } else {
//         console.error('Failed to fetch packages')
//         // Fallback to empty array if API fails
//         setPackages([])
//       }
//     } catch (error) {
//       console.error('Error fetching packages:', error)
//       setPackages([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
//     }
//   }

//   if (loading) {
//     return (
//       <section className="py-16 bg-[#FAF69D]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//             </div>
//             <p className="mt-4 text-gray-600">Loading packages...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl text-left">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Packages with scroll arrows */}
//         <div className="relative">
//           {/* Left arrow - desktop only */}
//           <button
//             onClick={scrollLeft}
//             className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Scroll container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {packages.map((pkg) => (
//               <div key={pkg.id} className="flex-shrink-0 w-full md:w-[358px] bg-white rounded-2xl overflow-hidden shadow-lg">
//                 {/* Image */}
// <div className="w-full h-[268px] relative">
//   {/* Use Next.js Image for optimization if configured properly */}
//   <Image
//     src={pkg.image_url}
//     alt={pkg.name}
//     fill
//     className="object-cover rounded-t-2xl"

//   />
  
// </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Location */}
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-semibold text-black">{pkg.name}</h3>
//                     <div className="flex items-center space-x-1">
//                       <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
//                         <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                       </div>
//                       <span className="text-sm text-gray-600">{pkg.location}</span>
//                     </div>
//                   </div>

//                   {/* Price */}
//                   <div className="mb-4">
//                     <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                     <p className="text-sm text-gray-600">per person</p>
//                   </div>

//                   {/* Inclusions */}
//                   <div className="mb-6">
//                     <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                     <ul className="space-y-1">
//                       {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                         <li key={index} className="flex items-center space-x-2">
//                           <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
//                             <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                           <span className="text-sm text-gray-700">{inclusion}</span>
//                         </li>
//                       ))}
//                       {pkg.inclusions.length > 3 && (
//                         <li className="text-sm text-gray-600">+{pkg.inclusions.length - 3} more inclusions</li>
//                       )}
//                     </ul>
//                   </div>

//                   {/* Book Now button */}
//                   <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                     <span>Book Now</span>
//                     <div className="w-5 h-5 bg-transparent rounded-full flex items-center justify-center">
//                       {/* <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg> */}
//                                     <img 
//                                       src="/arrowup.png" 
//                                       alt="Arrow up" 
//                                       className="w-5 h-5"
//                                     />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right arrow - desktop only */}
//           <button
//             onClick={scrollRight}
//             className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Empty state */}
//         {packages.length === 0 && !loading && (
//           <div className="text-center py-12">
//             <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No packages available</h3>
//             <p className="text-gray-500">Check back later or add packages from the admin dashboard.</p>
//           </div>
//         )}

//         {/* Mobile scroll indicator */}
//         {packages.length > 1 && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages</p>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(true)
//   const scrollContainerRef = useRef(null)

//   useEffect(() => {
//     fetchPackages()
//   }, [])

//   const fetchPackages = async () => {
//     try {
//       const response = await fetch('/api/packages')
//       if (response.ok) {
//         const data = await response.json()
//         setPackages(data)
//       } else {
//         console.error('Failed to fetch packages')
//         setPackages([])
//       }
//     } catch (error) {
//       console.error('Error fetching packages:', error)
//       setPackages([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header - Always visible, centered on mobile */}
//         <div className="mb-12 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Loading state for packages only */}
//         {loading && (
//           <div className="text-center py-8">
//             <div className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//             </div>
//             <p className="mt-4 text-gray-600">Loading packages...</p>
//           </div>
//         )}

//         {/* Packages with scroll arrows - Only show when not loading */}
//         {!loading && (
//           <div className="relative">
//             {/* Left arrow - desktop only */}
//             <button
//               onClick={scrollLeft}
//               className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             {/* Scroll container */}
//             <div
//               ref={scrollContainerRef}
//               className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {packages.map((pkg) => (
//                 <div key={pkg.id} className="flex-shrink-0 w-full md:w-[358px] bg-white rounded-2xl overflow-hidden shadow-lg">
//                   {/* Image */}
//                   <div className="w-full h-[268px] relative">
//                     <Image
//                       src={pkg.image_url}
//                       alt={pkg.name}
//                       fill
//                       className="object-cover rounded-t-2xl"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     {/* Package Name */}
//                     <h3 className="text-xl font-semibold text-black mb-3">{pkg.name}</h3>
                    
//                     {/* Location - Aligned to left under package name */}
//                     <div className="flex items-center space-x-1 mb-4">
//                       <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
//                         <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                       </div>
//                       <span className="text-sm text-gray-600">{pkg.location}</span>
//                     </div>

//                     {/* Price */}
//                     <div className="mb-4">
//                       <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                       <p className="text-sm text-gray-600">per person</p>
//                     </div>

//                     {/* Inclusions */}
//                     <div className="mb-6">
//                       <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                       <ul className="space-y-1">
//                         {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                           <li key={index} className="flex items-center space-x-2">
//                             {/* Gray checkmark instead of green */}
//                             <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
//                               <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                             <span className="text-sm text-gray-700">{inclusion}</span>
//                           </li>
//                         ))}
//                         {pkg.inclusions.length > 3 && (
//                           <li className="text-sm text-gray-600">+{pkg.inclusions.length - 3} more inclusions</li>
//                         )}
//                       </ul>
//                     </div>

//                     {/* Book Now button */}
//                     <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                       <span>Book Now</span>
//                       <img 
//                         src="/arrowup.png" 
//                         alt="Arrow up" 
//                         className="w-5 h-5"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right arrow - desktop only */}
//             <button
//               onClick={scrollRight}
//               className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Empty state */}
//         {!loading && packages.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No packages available</h3>
//             <p className="text-gray-500">Check back later</p>
//           </div>
//         )}

//         {/* Mobile scroll indicator */}
//         {!loading && packages.length > 1 && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages</p>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedPackage, setSelectedPackage] = useState(null)
//   const [showPackageModal, setShowPackageModal] = useState(false)
//   const scrollContainerRef = useRef(null)
//   const [isScrolling, setIsScrolling] = useState(false)

//   useEffect(() => {
//     fetchPackages()
//   }, [])

//   const fetchPackages = async () => {
//     try {
//       const response = await fetch('/api/packages')
//       if (response.ok) {
//         const data = await response.json()
//         setPackages(data)
//       } else {
//         console.error('Failed to fetch packages')
//         setPackages([])
//       }
//     } catch (error) {
//       console.error('Error fetching packages:', error)
//       setPackages([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const scrollLeft = () => {
//     if (scrollContainerRef.current && !isScrolling) {
//       setIsScrolling(true)
//       scrollContainerRef.current.scrollBy({ 
//         left: -400, 
//         behavior: 'smooth' 
//       })
//       setTimeout(() => setIsScrolling(false), 500)
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current && !isScrolling) {
//       setIsScrolling(true)
//       scrollContainerRef.current.scrollBy({ 
//         left: 400, 
//         behavior: 'smooth' 
//       })
//       setTimeout(() => setIsScrolling(false), 500)
//     }
//   }

//   const showAllInclusions = (pkg) => {
//     setSelectedPackage(pkg)
//     setShowPackageModal(true)
//   }

//   const closeModal = () => {
//     setShowPackageModal(false)
//     setSelectedPackage(null)
//   }

//   // Calculate card width based on number of packages
//   const getCardWidth = () => {
//     const count = packages.length
//     if (count === 1) return 'w-full max-w-2xl' // Extra wide for single card
//     if (count === 2) return 'w-full md:w-[500px]' // Wider for two cards
//     return 'w-full md:w-[358px]' // Default for 3+ cards
//   }

//   // Calculate container justification based on number of packages
//   const getContainerJustify = () => {
//     const count = packages.length
//     if (count <= 2) return 'justify-center'
//     return 'justify-start'
//   }

//   // Check if arrows should be visible
//   const shouldShowArrows = () => {
//     if (typeof window === 'undefined') return false
    
//     const count = packages.length
//     if (count <= 2) return false // No arrows for 1 or 2 cards
    
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current
//       const isScrollable = container.scrollWidth > container.clientWidth
//       return isScrollable
//     }
    
//     return count > 3 // Default fallback
//   }

//   // Handle touch events for smooth scrolling
//   const [touchStart, setTouchStart] = useState(null)
//   const [touchEnd, setTouchEnd] = useState(null)

//   const minSwipeDistance = 50

//   const onTouchStart = (e) => {
//     setTouchEnd(null)
//     setTouchStart(e.targetTouches[0].clientX)
//   }

//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return
//     const distance = touchStart - touchEnd
//     const isLeftSwipe = distance > minSwipeDistance
//     const isRightSwipe = distance < -minSwipeDistance

//     if (isLeftSwipe && shouldShowArrows()) {
//       scrollRight()
//     } else if (isRightSwipe && shouldShowArrows()) {
//       scrollLeft()
//     }
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header - Always visible, centered on mobile */}
//         <div className="mb-12 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Loading state for packages only */}
//         {loading && (
//           <div className="text-center py-8">
//             <div className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//             </div>
//             <p className="mt-4 text-gray-600">Loading packages...</p>
//           </div>
//         )}

//         {/* Packages with scroll arrows - Only show when not loading */}
//         {!loading && (
//           <div className="relative">
//             {/* Left arrow - conditional rendering */}
//             {shouldShowArrows() && (
//               <button
//                 onClick={scrollLeft}
//                 disabled={isScrolling}
//                 className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//             )}

//             {/* Scroll container */}
//             <div
//               ref={scrollContainerRef}
//               className={`flex overflow-x-auto space-x-6 pb-6 scrollbar-hide ${getContainerJustify()}`}
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               onTouchStart={onTouchStart}
//               onTouchMove={onTouchMove}
//               onTouchEnd={onTouchEnd}
//             >
//               {packages.map((pkg) => (
//                 <div 
//                   key={pkg.id} 
//                   className={`flex-shrink-0 ${getCardWidth()} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
//                 >
//                   {/* Image */}
//                   <div className="w-full h-[268px] relative">
//                     <Image
//                       src={pkg.image_url}
//                       alt={pkg.name}
//                       fill
//                       className="object-cover rounded-t-2xl"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col h-[calc(100%-268px)]">
//                     <div className="flex-1">
//                       {/* Package Name */}
//                       <h3 className="text-xl font-semibold text-black mb-3">{pkg.name}</h3>
                      
//                       {/* Location - Aligned to left under package name */}
//                       <div className="flex items-center space-x-1 mb-4">
//                         <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
//                           <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                           </svg>
//                         </div>
//                         <span className="text-sm text-gray-600">{pkg.location}</span>
//                       </div>

//                       {/* Price */}
//                       <div className="mb-4">
//                         <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                         <p className="text-sm text-gray-600">per person</p>
//                       </div>

//                       {/* Inclusions */}
//                       <div className="mb-4">
//                         <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                         <ul className="space-y-1">
//                           {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                             <li key={index} className="flex items-center space-x-2">
//                               {/* Gray checkmark instead of green */}
//                               <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
//                                 <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                 </svg>
//                               </div>
//                               <span className="text-sm text-gray-700">{inclusion}</span>
//                             </li>
//                           ))}
//                           {pkg.inclusions.length > 3 && (
//                             <li className="text-sm text-gray-600">
//                               <button 
//                                 onClick={() => showAllInclusions(pkg)}
//                                 className="text-blue-600 hover:text-blue-800 underline"
//                               >
//                                 +{pkg.inclusions.length - 3} more inclusions
//                               </button>
//                             </li>
//                           )}
//                         </ul>
//                       </div>
//                     </div>

//                     {/* Book Now button - Fixed at bottom */}
//                     <div className="mt-auto pt-4">
//                       <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                         <span>Book Now</span>
//                         <img 
//                           src="/arrowup.png" 
//                           alt="Arrow up" 
//                           className="w-5 h-5"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right arrow - conditional rendering */}
//             {shouldShowArrows() && (
//               <button
//                 onClick={scrollRight}
//                 disabled={isScrolling}
//                 className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             )}
//           </div>
//         )}

//         {/* Empty state */}
//         {!loading && packages.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No packages available</h3>
//             <p className="text-gray-500">Check back later</p>
//           </div>
//         )}

//         {/* Mobile scroll indicator */}
//         {!loading && packages.length > 1 && shouldShowArrows() && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages</p>
//           </div>
//         )}
//       </div>

//       {/* Package Details Modal */}
//       {showPackageModal && selectedPackage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="relative">
//               {/* Close button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               {/* Image */}
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={selectedPackage.image_url}
//                   alt={selectedPackage.name}
//                   fill
//                   className="object-cover rounded-t-2xl"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-black mb-3">{selectedPackage.name}</h3>
                
//                 <div className="flex items-center space-x-1 mb-4">
//                   <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <span className="text-lg text-gray-600">{selectedPackage.location}</span>
//                 </div>

//                 <div className="mb-6">
//                   <p className="text-2xl font-semibold text-black">₦{selectedPackage.price}</p>
//                   <p className="text-sm text-gray-600">per person</p>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="text-lg font-medium text-black mb-3">All Inclusions:</h4>
//                   <ul className="space-y-2">
//                     {selectedPackage.inclusions.map((inclusion, index) => (
//                       <li key={index} className="flex items-center space-x-3">
//                         <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
//                           <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                         <span className="text-gray-700">{inclusion}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                   <span>Book Now</span>
//                   <img 
//                     src="/arrowup.png" 
//                     alt="Arrow up" 
//                     className="w-5 h-5"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function PackageSales() {
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedPackage, setSelectedPackage] = useState(null)
//   const [showPackageModal, setShowPackageModal] = useState(false)
//   const scrollContainerRef = useRef(null)
//   const [isScrolling, setIsScrolling] = useState(false)
//   const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
//   const autoScrollRef = useRef(null)

//   useEffect(() => {
//     fetchPackages()
//     setupAutoScroll()
    
//     // Set up real-time updates (WebSocket or polling)
//     const interval = setInterval(fetchPackages, 10000) // Check every 10 seconds
    
//     return () => {
//       clearInterval(interval)
//       if (autoScrollRef.current) {
//         clearInterval(autoScrollRef.current)
//       }
//     }
//   }, [])

//   // Real-time updates effect
//   useEffect(() => {
//     if (packages.length > 0) {
//       restartAutoScroll()
//     }
//   }, [packages])

//   const fetchPackages = async () => {
//     try {
//       const response = await fetch('/api/packages?t=' + Date.now()) // Prevent caching
//       if (response.ok) {
//         const data = await response.json()
//         // Only update if packages actually changed
//         setPackages(prevPackages => {
//           if (JSON.stringify(prevPackages) !== JSON.stringify(data)) {
//             return data
//           }
//           return prevPackages
//         })
//       } else {
//         console.error('Failed to fetch packages')
//       }
//     } catch (error) {
//       console.error('Error fetching packages:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const setupAutoScroll = () => {
//     if (autoScrollRef.current) {
//       clearInterval(autoScrollRef.current)
//     }

//     autoScrollRef.current = setInterval(() => {
//       if (autoScrollEnabled && scrollContainerRef.current && packages.length > 2) {
//         const container = scrollContainerRef.current
//         const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
        
//         if (isAtEnd) {
//           // Smooth scroll back to start
//           container.scrollTo({ left: 0, behavior: 'smooth' })
//         } else {
//           // Smooth scroll to next card
//           container.scrollBy({ left: 400, behavior: 'smooth' })
//         }
//       }
//     }, 4000) // Scroll every 4 seconds
//   }

//   const restartAutoScroll = () => {
//     setupAutoScroll()
//   }

//   const pauseAutoScroll = () => {
//     setAutoScrollEnabled(false)
//   }

//   const resumeAutoScroll = () => {
//     setAutoScrollEnabled(true)
//     setupAutoScroll()
//   }

//   const scrollLeft = () => {
//     if (scrollContainerRef.current && !isScrolling) {
//       setIsScrolling(true)
//       pauseAutoScroll()
//       scrollContainerRef.current.scrollBy({ 
//         left: -400, 
//         behavior: 'smooth' 
//       })
//       setTimeout(() => {
//         setIsScrolling(false)
//         resumeAutoScroll()
//       }, 500)
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current && !isScrolling) {
//       setIsScrolling(true)
//       pauseAutoScroll()
//       scrollContainerRef.current.scrollBy({ 
//         left: 400, 
//         behavior: 'smooth' 
//       })
//       setTimeout(() => {
//         setIsScrolling(false)
//         resumeAutoScroll()
//       }, 500)
//     }
//   }

//   const scrollToStart = () => {
//     if (scrollContainerRef.current) {
//       pauseAutoScroll()
//       scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
//       setTimeout(resumeAutoScroll, 500)
//     }
//   }

//   const showAllInclusions = (pkg) => {
//     setSelectedPackage(pkg)
//     setShowPackageModal(true)
//     pauseAutoScroll()
//   }

//   const closeModal = () => {
//     setShowPackageModal(false)
//     setSelectedPackage(null)
//     resumeAutoScroll()
//   }

//   // Calculate card width based on number of packages
//   const getCardWidth = () => {
//     const count = packages.length
//     if (count === 1) return 'w-full max-w-2xl' // Extra wide for single card
//     if (count === 2) return 'w-full md:w-[500px]' // Wider for two cards
//     return 'w-full md:w-[358px]' // Default for 3+ cards
//   }

//   // Calculate container justification based on number of packages
//   const getContainerJustify = () => {
//     const count = packages.length
//     if (count <= 2) return 'justify-center'
//     return 'justify-start'
//   }

//   // Check if arrows should be visible
//   const shouldShowArrows = () => {
//     if (typeof window === 'undefined') return false
    
//     const count = packages.length
//     if (count <= 2) return false // No arrows for 1 or 2 cards
    
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current
//       const isScrollable = container.scrollWidth > container.clientWidth
//       return isScrollable
//     }
    
//     return count > 3 // Default fallback
//   }

//   // Handle touch events for smooth scrolling
//   const [touchStart, setTouchStart] = useState(null)
//   const [touchEnd, setTouchEnd] = useState(null)

//   const minSwipeDistance = 50

//   const onTouchStart = (e) => {
//     setTouchEnd(null)
//     setTouchStart(e.targetTouches[0].clientX)
//     pauseAutoScroll()
//   }

//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return
//     const distance = touchStart - touchEnd
//     const isLeftSwipe = distance > minSwipeDistance
//     const isRightSwipe = distance < -minSwipeDistance

//     if (isLeftSwipe && shouldShowArrows()) {
//       scrollRight()
//     } else if (isRightSwipe && shouldShowArrows()) {
//       scrollLeft()
//     }
    
//     setTimeout(resumeAutoScroll, 1000)
//   }

//   // Mouse events for desktop hover pause
//   const onMouseEnter = () => {
//     pauseAutoScroll()
//   }

//   const onMouseLeave = () => {
//     resumeAutoScroll()
//   }

//   return (
//     <section className="py-16 bg-[#FAF69D]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header - Always visible, centered on mobile */}
//         <div className="mb-12 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6">
//             Packages on Sale
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
//             Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
//           </p>
//         </div>

//         {/* Loading state for packages only */}
//         {loading && (
//           <div className="text-center py-8">
//             <div className="flex justify-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//             </div>
//             <p className="mt-4 text-gray-600">Loading packages...</p>
//           </div>
//         )}

//         {/* Packages with scroll arrows - Only show when not loading */}
//         {!loading && (
//           <div className="relative">
//             {/* Left arrow - conditional rendering */}
//             {shouldShowArrows() && (
//               <button
//                 onClick={scrollLeft}
//                 disabled={isScrolling}
//                 className="hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//             )}

//             {/* Scroll container */}
//             <div
//               ref={scrollContainerRef}
//               className={`flex overflow-x-auto space-x-6 pb-6 scrollbar-hide ${getContainerJustify()}`}
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//               onTouchStart={onTouchStart}
//               onTouchMove={onTouchMove}
//               onTouchEnd={onTouchEnd}
//               onMouseEnter={onMouseEnter}
//               onMouseLeave={onMouseLeave}
//             >
//               {packages.map((pkg) => (
//                 <div 
//                   key={pkg.id} 
//                   className={`flex-shrink-0 ${getCardWidth()} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
//                 >
//                   {/* Image */}
//                   <div className="w-full h-[268px] relative">
//                     <Image
//                       src={pkg.image_url}
//                       alt={pkg.name}
//                       fill
//                       className="object-cover rounded-t-2xl"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col h-[calc(100%-268px)]">
//                     <div className="flex-1">
//                       {/* Package Name */}
//                       <h3 className="text-xl font-semibold text-black mb-3">{pkg.name}</h3>
                      
//                       {/* Location - Aligned to left under package name */}
//                       <div className="flex items-center space-x-1 mb-4">
//                         <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
//                           <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                           </svg>
//                         </div>
//                         <span className="text-sm text-gray-600">{pkg.location}</span>
//                       </div>

//                       {/* Price */}
//                       <div className="mb-4">
//                         <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
//                         <p className="text-sm text-gray-600">per person</p>
//                       </div>

//                       {/* Inclusions */}
//                       <div className="mb-4">
//                         <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
//                         <ul className="space-y-1">
//                           {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
//                             <li key={index} className="flex items-center space-x-2">
//                               {/* Gray checkmark instead of green */}
//                               <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
//                                 <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                 </svg>
//                               </div>
//                               <span className="text-sm text-gray-700">{inclusion}</span>
//                             </li>
//                           ))}
//                           {pkg.inclusions.length > 3 && (
//                             <li className="text-sm text-gray-600">
//                               <button 
//                                 onClick={() => showAllInclusions(pkg)}
//                                 className="text-gray-600 hover:text-gray-800"
//                               >
//                                 +{pkg.inclusions.length - 3} more inclusions
//                               </button>
//                             </li>
//                           )}
//                         </ul>
//                       </div>
//                     </div>

//                     {/* Book Now button - Fixed at bottom */}
//                     <div className="mt-auto pt-4">
//                       {/* <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                         <span>Book Now</span>
//                         <img 
//                           src="/arrowup.png" 
//                           alt="Arrow up" 
//                           className="w-5 h-5"
//                         />
//                       </button> */}

//                       <a 
//                           href={`https://wa.me/2347014952315?text=${encodeURIComponent('Hello! I would like to book the ' + pkg.name + ' package.')}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2"
//                         >
//                           <span>Book Now</span>
//                           <img 
//                             src="/arrowup.png" 
//                             alt="Arrow up" 
//                             className="w-5 h-5"
//                           />
//                         </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right arrow - conditional rendering */}
//             {shouldShowArrows() && (
//               <button
//                 onClick={scrollRight}
//                 disabled={isScrolling}
//                 className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             )}

//             {/* Auto-scroll restart button (visible during debugging) */}
//             {process.env.NODE_ENV === 'development' && (
//               <button
//                 onClick={restartAutoScroll}
//                 className="absolute top-0 right-0 bg-transparent text-transparent px-2 py-1 rounded text-xs hover:bg-gray-200 hover:text-gray-600 transition-colors"
//               >
//                 {/* Restart Scroll */}
//               </button>
//             )}
//           </div>
//         )}

//         {/* Empty state */}
//         {!loading && packages.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No packages available</h3>
//             <p className="text-gray-500">Check back later</p>
//           </div>
//         )}

//         {/* Mobile scroll indicator */}
//         {!loading && packages.length > 1 && shouldShowArrows() && (
//           <div className="md:hidden text-center mt-4">
//             <p className="text-sm text-gray-600">Swipe to view more packages • Auto-scroll enabled</p>
//           </div>
//         )}
//       </div>

//       {/* Package Details Modal */}
//       {showPackageModal && selectedPackage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="relative">
//               {/* Close button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               {/* Image */}
//               <div className="w-full h-64 relative">
//                 <Image
//                   src={selectedPackage.image_url}
//                   alt={selectedPackage.name}
//                   fill
//                   className="object-cover rounded-t-2xl"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-black mb-3">{selectedPackage.name}</h3>
                
//                 <div className="flex items-center space-x-1 mb-4">
//                   <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <span className="text-lg text-gray-600">{selectedPackage.location}</span>
//                 </div>

//                 <div className="mb-6">
//                   <p className="text-2xl font-semibold text-black">₦{selectedPackage.price}</p>
//                   <p className="text-sm text-gray-600">per person</p>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="text-lg font-medium text-black mb-3">All Inclusions:</h4>
//                   <ul className="space-y-2">
//                     {selectedPackage.inclusions.map((inclusion, index) => (
//                       <li key={index} className="flex items-center space-x-3">
//                         <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
//                           <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                         <span className="text-gray-700">{inclusion}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2">
//                   <span>Book Now</span>
//                   <img 
//                     src="/arrowup.png" 
//                     alt="Arrow up" 
//                     className="w-5 h-5"
//                   />
//                 </button> */}
//               <a 
//                 href={`https://wa.me/2347014952315?text=${encodeURIComponent('Hello! I would like to book the ' + selectedPackage.name + ' package.')}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2"
//               >
//                 <span>Book Now</span>
//                 <img 
//                   src="/arrowup.png" 
//                   alt="Arrow up" 
//                   className="w-5 h-5"
//                 />
//               </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom CSS to hide scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
        
//         /* Smooth scrolling animation */
//         .scroll-container {
//           scroll-behavior: smooth;
//           transition: scroll-left 0.5s ease-in-out;
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function PackageSales() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [showPackageModal, setShowPackageModal] = useState(false)
  const [showInclusionsModal, setShowInclusionsModal] = useState(false)
  const scrollContainerRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const autoScrollRef = useRef(null)

  useEffect(() => {
    fetchPackages()
    setupAutoScroll()
    
    // Set up real-time updates (WebSocket or polling)
    const interval = setInterval(fetchPackages, 10000) // Check every 10 seconds
    
    return () => {
      clearInterval(interval)
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [])

  // Real-time updates effect
  useEffect(() => {
    if (packages.length > 0) {
      restartAutoScroll()
    }
  }, [packages])

  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/packages?t=' + Date.now()) // Prevent caching
      if (response.ok) {
        const data = await response.json()
        // Only update if packages actually changed
        setPackages(prevPackages => {
          if (JSON.stringify(prevPackages) !== JSON.stringify(data)) {
            return data
          }
          return prevPackages
        })
      } else {
        console.error('Failed to fetch packages')
      }
    } catch (error) {
      console.error('Error fetching packages:', error)
    } finally {
      setLoading(false)
    }
  }

  const setupAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }

    autoScrollRef.current = setInterval(() => {
      if (autoScrollEnabled && scrollContainerRef.current && packages.length > 1) {
        const container = scrollContainerRef.current
        const cardWidth = container.firstChild ? container.firstChild.offsetWidth + 24 : 400 // card width + gap
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
        
        if (isAtEnd) {
          // Smooth scroll back to start
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Smooth scroll to next card
          container.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }
    }, 4000) // Scroll every 4 seconds
  }

  const restartAutoScroll = () => {
    setupAutoScroll()
  }

  const pauseAutoScroll = () => {
    setAutoScrollEnabled(false)
  }

  const resumeAutoScroll = () => {
    setAutoScrollEnabled(true)
    setupAutoScroll()
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true)
      pauseAutoScroll()
      const cardWidth = scrollContainerRef.current.firstChild ? scrollContainerRef.current.firstChild.offsetWidth + 24 : 400
      scrollContainerRef.current.scrollBy({ 
        left: -cardWidth, 
        behavior: 'smooth' 
      })
      setTimeout(() => {
        setIsScrolling(false)
        resumeAutoScroll()
      }, 500)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true)
      pauseAutoScroll()
      const cardWidth = scrollContainerRef.current.firstChild ? scrollContainerRef.current.firstChild.offsetWidth + 24 : 400
      scrollContainerRef.current.scrollBy({ 
        left: cardWidth, 
        behavior: 'smooth' 
      })
      setTimeout(() => {
        setIsScrolling(false)
        resumeAutoScroll()
      }, 500)
    }
  }

  const scrollToStart = () => {
    if (scrollContainerRef.current) {
      pauseAutoScroll()
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      setTimeout(resumeAutoScroll, 500)
    }
  }

  const showAllInclusions = (pkg) => {
    setSelectedPackage(pkg)
    setShowInclusionsModal(true)
    pauseAutoScroll()
  }

  const showPackageDetails = (pkg) => {
    setSelectedPackage(pkg)
    setShowInclusionsModal(true)
    pauseAutoScroll()
  }

  const closeModal = () => {
    setShowPackageModal(false)
    setShowInclusionsModal(false)
    setSelectedPackage(null)
    resumeAutoScroll()
  }

  // Get card width based on screen size - FIXED
  const getCardWidth = () => {
    // On mobile: full width minus padding (show one card at a time)
    // On tablet: fixed medium size (don't stretch)
    // On desktop: fixed large size
    return 'w-[85vw] sm:w-[400px] lg:w-[358px] flex-shrink-0'
  }

  // Container alignment - FIXED
  const getContainerJustify = () => {
    // On mobile & tablet: start alignment to show one full card
    // On desktop: center alignment
    return 'justify-start lg:justify-center'
  }

  // Check if arrows should be visible
  const shouldShowArrows = () => {
    if (typeof window === 'undefined') return false
    
    const count = packages.length
    if (count <= 1) return false // No arrows for 1 card
    
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const isScrollable = container.scrollWidth > container.clientWidth
      return isScrollable
    }
    
    return count > 1 // Default fallback
  }

  // Handle touch events for smooth scrolling
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    pauseAutoScroll()
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && shouldShowArrows()) {
      scrollRight()
    } else if (isRightSwipe && shouldShowArrows()) {
      scrollLeft()
    }
    
    setTimeout(resumeAutoScroll, 1000)
  }

  // Mouse events for desktop hover pause
  const onMouseEnter = () => {
    pauseAutoScroll()
  }

  const onMouseLeave = () => {
    resumeAutoScroll()
  }

  return (
    <section className="py-16 bg-[#FAF69D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Always visible, centered on mobile & tablet */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-dynapuff text-black mb-6">
            Packages on Sale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
            Carefully curated travel packages designed to deliver exceptional experiences at the best value. Unforgettable adventures all at prices you'll love.
          </p>
        </div>

        {/* Loading state for packages only */}
        {loading && (
          <div className="text-center py-8">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading packages...</p>
          </div>
        )}

        {/* Packages with scroll arrows - Only show when not loading */}
        {!loading && (
          <div className="relative">
            {/* Left arrow - conditional rendering */}
            {shouldShowArrows() && (
              <button
                onClick={scrollLeft}
                disabled={isScrolling}
                className="hidden lg:block absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Scroll container - FIXED: Start alignment on mobile/tablet, center on desktop */}
            <div
              ref={scrollContainerRef}
              className={`flex overflow-x-auto space-x-6 pb-6 scrollbar-hide ${getContainerJustify()} snap-x snap-mandatory`}
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollPadding: '0 24px' // Add padding for better snap
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`${getCardWidth()} bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 snap-start`}
                >
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
                  <div className="p-6 flex flex-col h-[calc(100%-268px)]">
                    <div className="flex-1">
                      {/* Package Name */}
                      <h3 className="text-xl font-semibold text-black mb-3">{pkg.name}</h3>
                      
                      {/* Location - Aligned to left under package name */}
                      <div className="flex items-center space-x-1 mb-4">
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{pkg.location}</span>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <p className="text-xl font-semibold text-black">₦{pkg.price}</p>
                        <p className="text-sm text-gray-600">per person</p>
                      </div>

                      {/* Inclusions */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-black mb-2">Inclusions:</h4>
                        <ul className="space-y-1">
                          {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              {/* Gray checkmark instead of green */}
                              <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
                                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-700">{inclusion}</span>
                            </li>
                          ))}
                          {pkg.inclusions.length > 3 && (
                            <li className="text-sm text-gray-600">
                              <button 
                                onClick={() => showAllInclusions(pkg)}
                                className="text-gray-600 hover:text-gray-800"
                              >
                                +{pkg.inclusions.length - 3} more inclusions
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Book Now button - Fixed at bottom */}
                    <div className="mt-auto pt-4">
                      <button 
                        onClick={() => showPackageDetails(pkg)}
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center space-x-2"
                      >
                        <span>View</span>
                        <img 
                          src="/arrowup.png" 
                          alt="Arrow up" 
                          className="w-5 h-5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow - conditional rendering */}
            {shouldShowArrows() && (
              <button
                onClick={scrollRight}
                disabled={isScrolling}
                className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Auto-scroll restart button (visible during debugging) */}
            {process.env.NODE_ENV === 'development' && (
              <button
                onClick={restartAutoScroll}
                className="absolute top-0 right-0 bg-transparent text-transparent px-2 py-1 rounded text-xs hover:bg-gray-200 hover:text-gray-600 transition-colors"
              >
                {/* Restart Scroll */}
              </button>
            )}
          </div>
        )}

        {/* Empty state */}
        {!loading && packages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No packages available</h3>
            <p className="text-gray-500">Check back later</p>
          </div>
        )}

        {/* Mobile & Tablet scroll indicator */}
        {!loading && packages.length > 1 && shouldShowArrows() && (
          <div className="lg:hidden text-center mt-4">
            <p className="text-sm text-gray-600">Swipe to view more packages • Auto-scroll enabled</p>
          </div>
        )}
      </div>


      {/* New Inclusions Modal - Desktop & Mobile */}
      {showInclusionsModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 bg-[#D1D0D0] rounded-full p-2 hover:bg-gray-300 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Package Name - Different sizes for desktop vs mobile & tablet */}
              <h3 className="text-4xl font-dynapuff text-black mb-6 lg:block hidden">
                {selectedPackage.name}
              </h3>
              <h3 className="text-2xl font-dynapuff text-black mb-6 lg:hidden block">
                {selectedPackage.name}
              </h3>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Image & Inclusions (Visible on all devices) */}
                <div className="flex-1">
                  {/* Package Image - Hidden on mobile & tablet */}
                  <div className="hidden lg:block w-full h-[243px] relative mb-6">
                    <Image
                      src={selectedPackage.image_url}
                      alt={selectedPackage.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Inclusions - Reduced line height */}
                  <div className="hidden lg:block">
                    <h4 className="text-xl font-inter font-normal text-black mb-4">Inclusions</h4>
                    <ul className="space-y-2">
                      {selectedPackage.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base font-inter font-light text-gray-700">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Package Overview, Price & Booking (Hidden on mobile & tablet) */}
                <div className="hidden lg:block flex-1">
                  {/* Package Overview */}
                  {selectedPackage.description && (
                    <div className="mb-6">
                      <h4 className="text-xl font-inter font-normal text-black mb-3">Package Overview</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedPackage.description}
                      </p>
                    </div>
                  )}

                  {/* Package Price - Added header for desktop */}
                  <div className="mb-6">
                    <h4 className="text-xl font-inter font-normal text-black mb-3">Package Price</h4>
                    <div className="flex items-end space-x-3">
                      <span className="text-2xl font-inter font-bold text-black">₦{selectedPackage.price}</span>
                      <div className="flex flex-col items-start text-sm text-gray-600">
                        <span>per</span>
                        <span>person</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <a 
                    href={`https://wa.me/2347014952315?text=${encodeURIComponent('Hello! I would like to book the ' + selectedPackage.name + ' package.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1DBF73] text-white py-3 rounded-lg font-semibold hover:bg-[#17a564] transition flex items-center justify-center space-x-2 mb-4"
                  >
                    <span>Book Now</span>
                    <img 
                      src="/arrowup.png" 
                      alt="Arrow up" 
                      className="w-5 h-5"
                    />
                  </a>

                  {/* WhatsApp Info */}
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Click "Book Now" to start a WhatsApp</p>
                    <p>conversation with our travel experts.</p>
                    <p>We'll help you customize your perfect</p>
                    <p>getaway!</p>
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Content - Package Overview, Inclusions, Price & Booking */}
              <div className="lg:hidden space-y-6 mt-6">
                {/* Package Overview - Mobile & Tablet */}
                {selectedPackage.description && (
                  <div>
                    <h4 className="text-base font-inter font-normal text-black mb-2">Package Overview</h4>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {selectedPackage.description}
                    </p>
                  </div>
                )}

                {/* Inclusions - Mobile & Tablet */}
                <div>
                  <h4 className="text-base font-inter font-normal text-black mb-2">Inclusions</h4>
                  <ul className="space-y-1">
                    {selectedPackage.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs font-inter font-light text-gray-700">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package Price - Mobile & Tablet */}
                <div>
                  <h4 className="text-base font-inter font-normal text-black mb-2">Package Price</h4>
                  <div className="flex items-end space-x-3">
                    <span className="text-xl font-inter font-bold text-black">₦{selectedPackage.price}</span>
                    <div className="flex flex-col items-start text-xs text-gray-600">
                      <span>per</span>
                      <span>person</span>
                    </div>
                  </div>
                </div>

                {/* Mobile & Tablet Book Now Button */}
                <a 
                  href={`https://wa.me/2347014952315?text=${encodeURIComponent('Hello! I would like to book the ' + selectedPackage.name + ' package.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1DBF73] text-white py-3 rounded-lg font-semibold hover:bg-[#17a564] transition flex items-center justify-center space-x-2"
                >
                  <span>Book Now</span>
                  <img 
                    src="/arrowup.png" 
                    alt="Arrow up" 
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scrolling animation */
        .scroll-container {
          scroll-behavior: smooth;
          transition: scroll-left 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}