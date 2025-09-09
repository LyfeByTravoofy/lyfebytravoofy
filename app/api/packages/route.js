import { NextRequest, NextResponse } from 'next/server'

// In a real application, you would use a database
// This is just a simple in-memory storage for demonstration
let packages = []

export async function GET() {
  return NextResponse.json(packages)
}

export async function POST(request) {
  try {
    const { name, price, description, features } = await request.json()
    
    if (!name || !price || !description || !features) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const newPackage = {
      id: Date.now().toString(),
      name,
      price,
      description,
      features
    }
    
    packages.push(newPackage)
    return NextResponse.json(newPackage, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}