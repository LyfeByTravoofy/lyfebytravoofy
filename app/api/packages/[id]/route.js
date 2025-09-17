import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    
    const { error } = await supabase
      .from('packages')
      .delete()
      .eq('id', id)

    if (error) throw error
    return NextResponse.json({ message: 'Package deleted successfully' })

  } catch (error) {
    console.error('Error deleting package:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}