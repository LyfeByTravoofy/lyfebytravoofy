'use client'

import { useState, useEffect } from 'react'


export default function PackageSales() {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    // Fetch packages from API
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
      .catch(err => console.error('Error fetching packages:', err))
  }, [])

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-dynapuff text-indigo-900 mb-4">
            Our Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of travel experiences tailored to create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                  <span className="text-2xl font-dynapuff text-indigo-600">${pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {pkg.features.split(',').map((feature, i) => (
                      <li key={i}>{feature.trim()}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {packages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No packages available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}