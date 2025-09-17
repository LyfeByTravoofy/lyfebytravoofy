// 'use client'

// import { useState } from 'react'

// export default function Admin() {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     description: '',
//     features: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     try {
//       const response = await fetch('/api/packages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         alert('Package added successfully!')
//         setFormData({
//           name: '',
//           price: '',
//           description: '',
//           features: ''
//         })
//       } else {
//         alert('Error adding package')
//       }
//     } catch (error) {
//       console.error('Error:', error)
//       alert('Error adding package')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <h1 className="text-3xl font-dynapuff text-indigo-900 mb-8 text-center">Admin Dashboard</h1>
          
//           <h2 className="text-2xl font-semibold mb-6">Add New Travel Package</h2>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Package Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//                 Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 id="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows={4}
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               ></textarea>
//             </div>

//             <div>
//               <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">
//                 Features (comma separated)
//               </label>
//               <input
//                 type="text"
//                 name="features"
//                 id="features"
//                 value={formData.features}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="e.g., Flight, Hotel, Guided Tours, Meals"
//                 required
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//               >
//                 Add Package
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }



// 'use client'

// import { useState } from 'react'

// export default function Admin() {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     description: '',
//     features: '',
//     location: '',
//     image_url: '',
//     inclusions: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [message, setMessage] = useState('')

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setMessage('')
    
//     try {
//       // Convert comma-separated inclusions to array
//       const inclusionsArray = formData.inclusions
//         .split(',')
//         .map(item => item.trim())
//         .filter(item => item !== '')

//       const response = await fetch('/api/packages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           inclusions: inclusionsArray
//         }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setMessage('Package added successfully!')
//         setFormData({
//           name: '',
//           price: '',
//           description: '',
//           features: '',
//           location: '',
//           image_url: '',
//           inclusions: ''
//         })
//       } else {
//         setMessage(`Error: ${data.error || 'Failed to add package'}`)
//       }
//     } catch (error) {
//       console.error('Error:', error)
//       setMessage('Error adding package. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <h1 className="text-3xl font-dynapuff text-indigo-900 mb-8 text-center">Admin Dashboard</h1>
          
//           {message && (
//             <div className={`mb-6 p-4 rounded-lg ${
//               message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//             }`}>
//               {message}
//             </div>
//           )}
          
//           <h2 className="text-2xl font-semibold mb-6">Add New Travel Package</h2>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Package Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//                 Price (₦)
//               </label>
//               <input
//                 type="text"
//                 name="price"
//                 id="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="1,598,000"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 id="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Tanzania"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-1">
//                 Image URL (filename)
//               </label>
//               <input
//                 type="text"
//                 name="image_url"
//                 id="image_url"
//                 value={formData.image_url}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="zanzibar.jpg"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 id="description"
//                 rows={3}
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               ></textarea>
//             </div>

//             <div>
//               <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">
//                 Features (comma separated)
//               </label>
//               <input
//                 type="text"
//                 name="features"
//                 id="features"
//                 value={formData.features}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Beachfront resort, Guided tours, Spa treatments"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="inclusions" className="block text-sm font-medium text-gray-700 mb-1">
//                 Inclusions (comma separated)
//               </label>
//               <textarea
//                 name="inclusions"
//                 id="inclusions"
//                 rows={3}
//                 value={formData.inclusions}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Round trip flights, 6 Nights accommodation, Daily breakfast"
//                 required
//               ></textarea>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Adding Package...' : 'Add Package'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }




'use client'

import { useState, useEffect } from 'react'
import CloudinaryUpload from '@/components/CloudinaryUpload'

export default function Admin() {
  const [packages, setPackages] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    features: '',
    location: '',
    image_url: '',
    inclusions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

// In your Admin component, update the handleImageUpload function:
const handleImageUpload = (imageUrl) => {
  console.log('Image URL received:', imageUrl)
  setFormData(prev => ({
    ...prev,
    image_url: imageUrl
  }))
}

// And add this useEffect to debug formData changes:
useEffect(() => {
  console.log('Form data updated:', formData)
}, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    
    try {
      const inclusionsArray = formData.inclusions
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '')

      const url = editing ? `/api/packages/${formData.id}` : '/api/packages'
      const method = editing ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          inclusions: inclusionsArray
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(editing ? 'Package updated successfully!' : 'Package added successfully!')
        resetForm()
        fetchPackages() // Refresh the list
      } else {
        setMessage(`Error: ${data.error || 'Failed to save package'}`)
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Error saving package. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (pkg) => {
    setFormData({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      features: pkg.features,
      location: pkg.location,
      image_url: pkg.image_url,
      inclusions: Array.isArray(pkg.inclusions) ? pkg.inclusions.join(', ') : pkg.inclusions
    })
    setEditing(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this package?')) return

    try {
      const response = await fetch(`/api/packages/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setMessage('Package deleted successfully!')
        fetchPackages() // Refresh the list
      } else {
        setMessage('Error deleting package')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Error deleting package')
    }
  }

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      price: '',
      description: '',
      features: '',
      location: '',
      image_url: '',
      inclusions: ''
    })
    setEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-dynapuff text-indigo-900 mb-8 text-center">Admin Dashboard</h1>
          
          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message}
              <button onClick={() => setMessage('')} className="float-right">✕</button>
            </div>
          )}
          
          <h2 className="text-2xl font-semibold mb-6">
            {editing ? 'Edit Travel Package' : 'Add New Travel Package'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange} // This will update the state
                className="w-full rounded-lg border-gray-300 border p-3"
                placeholder="Image URL will appear here"
              />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Image
              </label>
              <CloudinaryUpload 
                onImageUpload={handleImageUpload} 
                existingImage={formData.image_url}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Price (₦)
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="1,598,000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tanzania"
                  required
                />
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
                  placeholder="Beachfront resort, Guided tours, Spa treatments"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="inclusions" className="block text-sm font-medium text-gray-700 mb-1">
                Inclusions (comma separated)
              </label>
              <textarea
                name="inclusions"
                id="inclusions"
                rows={3}
                value={formData.inclusions}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 border p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Round trip flights, 6 Nights accommodation, Daily breakfast"
                required
              ></textarea>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : editing ? 'Update Package' : 'Add Package'}
              </button>
              
              {editing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Packages List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Manage Packages</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading packages...</p>
            </div>
          ) : packages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No packages found. Add your first package above.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Image</th>
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Price</th>
                    <th className="text-left p-3">Location</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <img
                          src={pkg.image_url}
                          alt={pkg.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                      </td>
                      <td className="p-3 font-medium">{pkg.name}</td>
                      <td className="p-3">₦{pkg.price}</td>
                      <td className="p-3">{pkg.location}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(pkg)}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(pkg.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}