// // import { NextRequest, NextResponse } from 'next/server'

// // // In a real application, you would use a database
// // // This is just a simple in-memory storage for demonstration
// // let packages = []

// // export async function GET() {
// //   return NextResponse.json(packages)
// // }

// // export async function POST(request) {
// //   try {
// //     const { name, price, description, features } = await request.json()
    
// //     if (!name || !price || !description || !features) {
// //       return NextResponse.json(
// //         { error: 'Missing required fields' },
// //         { status: 400 }
// //       )
// //     }
    
// //     const newPackage = {
// //       id: Date.now().toString(),
// //       name,
// //       price,
// //       description,
// //       features
// //     }
    
// //     packages.push(newPackage)
// //     return NextResponse.json(newPackage, { status: 201 })
// //   } catch (error) {
// //     return NextResponse.json(
// //       { error: 'Internal server error' },
// //       { status: 500 }
// //     )
// //   }
// // }


// import { NextRequest, NextResponse } from 'next/server'
// import { supabase } from '@/lib/supabase'

// export async function GET() {
//   try {
//     const { data: packages, error } = await supabase
//       .from('packages')
//       .select('*')
//       .order('created_at', { ascending: false })

//     if (error) {
//       throw error
//     }

//     return NextResponse.json(packages)
//   } catch (error) {
//     console.error('Error fetching packages:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch packages' },
//       { status: 500 }
//     )
//   }
// }

// export async function POST(request) {
//   try {
//     const { name, price, description, features, location, image_url, inclusions } = await request.json()
    
//     if (!name || !price || !description || !features || !location || !image_url) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       )
//     }
    
//     const { data: newPackage, error } = await supabase
//       .from('packages')
//       .insert([
//         {
//           name,
//           price,
//           description,
//           features,
//           location,
//           image_url,
//           inclusions: inclusions || []
//         }
//       ])
//       .select()
//       .single()

//     if (error) {
//       throw error
//     }

//     return NextResponse.json(newPackage, { status: 201 })
//   } catch (error) {
//     console.error('Error creating package:', error)
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }



import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: packages, error } = await supabase
      .from('packages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json(packages)

  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { name, price, description, features, location, image_url, inclusions } = await request.json()
    
    if (!name || !price || !description || !features || !location || !image_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    const { data: newPackage, error } = await supabase
      .from('packages')
      .insert([{ name, price, description, features, location, image_url, inclusions }])
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(newPackage, { status: 201 })

  } catch (error) {
    console.error('Error creating package:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const { id, name, price, description, features, location, image_url, inclusions } = await request.json()
    
    if (!id || !name || !price || !description || !features || !location || !image_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    const { data: updatedPackage, error } = await supabase
      .from('packages')
      .update({ name, price, description, features, location, image_url, inclusions })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(updatedPackage)

  } catch (error) {
    console.error('Error updating package:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}