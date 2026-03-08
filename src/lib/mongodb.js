import { MongoClient, ServerApiVersion } from 'mongodb'
import dns from 'dns/promises'

async function getMongoClient() {
  // Manually resolve SRV record using Google DNS
  const resolver = new dns.Resolver()
  resolver.setServers(['8.8.8.8', '8.8.4.4'])

  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('Please define MONGODB_URI in .env.local')
  }

  try {
    // Test DNS resolution first
    await resolver.resolve('cluster0.5herxdg.mongodb.net')
  } catch (e) {
    console.log('DNS test failed:', e.message)
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    family: 4,
    dnsResolve: (hostname, callback) => {
      resolver.resolve4(hostname)
        .then((addrs) => callback(null, addrs))
        .catch((err) => callback(err))
    },
  })

  return client.connect()
}

let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = getMongoClient()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = getMongoClient()
}

export default clientPromise