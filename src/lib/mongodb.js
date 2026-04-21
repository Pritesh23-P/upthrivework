import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: false,
})

export async function connectDB() {
  await client.connect()
  const db = client.db('UW')
  return db.collection('UWT')
}