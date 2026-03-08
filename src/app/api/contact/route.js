import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, whatsapp, university, service, deadline, message } = body

    if (!name || !email || !whatsapp || !university || !service || !deadline || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('upthrivework')

    await db.collection('contacts').insertOne({
      name,
      email,
      whatsapp,
      university,
      service,
      deadline,
      message,
      status: 'new',
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}