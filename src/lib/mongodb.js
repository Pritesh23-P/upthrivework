import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Please define MONGODB_URI in .env.local')
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise