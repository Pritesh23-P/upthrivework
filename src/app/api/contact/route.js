import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('Received data:', body)

    const collection = await connectDB()
    await collection.insertOne({
      ...body,
      createdAt: new Date(),
    })
    console.log('Data inserted to MongoDB')

    try {
      const formsparkRes = await fetch('https://submit-form.com/V6VN9PHf4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body),
      })
      console.log('Formspark status:', formsparkRes.status)
    } catch (formsparkError) {
      console.error('Formspark Error:', formsparkError.message)
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('API Error:', error.message)
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 },
    )
  }
}