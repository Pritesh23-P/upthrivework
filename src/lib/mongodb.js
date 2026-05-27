import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise

if (uri) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    tls: true,
    tlsAllowInvalidCertificates: false,
  })
  clientPromise = client.connect()
}

export async function connectDB() {
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set')
  }
  await clientPromise
  const db = client.db('UW')
  return db.collection('UWT')
}