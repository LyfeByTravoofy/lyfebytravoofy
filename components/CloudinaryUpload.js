// 'use client'

// import { useState } from 'react'
// import { CldUploadWidget } from 'next-cloudinary'

// export default function CloudinaryUpload({ onImageUpload, existingImage }) {
//   const [imageUrl, setImageUrl] = useState(existingImage || '')

//   const handleUpload = (result) => {
//     if (result.event === 'success') {
//       const url = result.info.secure_url
//       setImageUrl(url)
//       onImageUpload(url)
//     }
//   }

//   return (
//     <div>
//       <CldUploadWidget
//         uploadPreset="your_upload_preset" // Create this in Cloudinary
//         onUpload={handleUpload}
//         options={{
//           multiple: false,
//           sources: ['local', 'url', 'camera'],
//           maxFiles: 1
//         }}
//       >
//         {({ open }) => (
//           <div>
//             {imageUrl ? (
//               <div className="mb-4">
//                 <img
//                   src={imageUrl}
//                   alt="Preview"
//                   className="w-full h-48 object-cover rounded-lg mb-2"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => open()}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
//                 >
//                   Change Image
//                 </button>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => open()}
//                 className="w-full bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-300 transition"
//               >
//                 <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 <p className="text-gray-600">Click to upload an image</p>
//               </button>
//             )}
//           </div>
//         )}
//       </CldUploadWidget>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'

export default function CloudinaryUpload({ onImageUpload, existingImage }) {
  const [imageUrl, setImageUrl] = useState(existingImage || '')
  const [debugInfo, setDebugInfo] = useState('')

  useEffect(() => {
    console.log('CloudinaryUpload mounted with existingImage:', existingImage)
    setImageUrl(existingImage || '')
  }, [existingImage])

  const handleSuccess = (result) => {
    console.log('=== CLOUDINARY UPLOAD SUCCESS ===')
    console.log('Result:', result)
    
    const url = result.info.secure_url
    console.log('✅ Upload successful! URL:', url)
    
    // Update local state
    setImageUrl(url)
    setDebugInfo(`Upload successful: ${url.substring(0, 50)}...`)
    
    // Call parent callback
    if (onImageUpload && typeof onImageUpload === 'function') {
      console.log('✅ Calling onImageUpload callback')
      onImageUpload(url)
    } else {
      console.log('❌ onImageUpload is not a function or is undefined')
    }
  }

  const handleError = (error) => {
    console.error('Cloudinary error:', error)
    setDebugInfo(`Error: ${error.message}`)
  }

  return (
    <div>
      {/* Debug info */}
      <div className="bg-yellow-100 p-3 rounded-lg mb-4 text-xs">
        <div className="font-bold">Debug: {imageUrl ? 'Image URL set' : 'No image'}</div>
        {imageUrl && <div>URL: {imageUrl.substring(0, 70)}...</div>}
      </div>

      <CldUploadWidget
        uploadPreset="travels"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        {({ open }) => (
          <div>
            {imageUrl ? (
              <div className="mb-4">
                <div className="text-green-600 text-sm mb-2">✅ Image uploaded successfully!</div>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mb-2 border-2 border-green-500"
                  onError={(e) => {
                    console.error('Image failed to load:', imageUrl)
                    e.target.style.display = 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => open()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => open()}
                className="w-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-8 text-center hover:bg-gray-300 transition"
              >
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 font-medium">Click to upload an image</p>
              </button>
            )}
          </div>
        )}
      </CldUploadWidget>
    </div>
  )
}