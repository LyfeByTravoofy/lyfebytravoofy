'use client'

import { useState } from 'react'

export default function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    features: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Package added successfully!')
        setFormData({
          name: '',
          price: '',
          description: '',
          features: ''
        })
      } else {
        alert('Error adding package')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error adding package')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-dynapuff text-indigo-900 mb-8 text-center">Admin Dashboard</h1>
          
          <h2 className="text-2xl font-semibold mb-6">Add New Travel Package</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">
                Features (comma separated)
              </label>
              <input
                type="text"
                name="features"
                id="features"
                value={formData.features}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Flight, Hotel, Guided Tours, Meals"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Add Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}