import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) throw new Error('MONGO_URI is not set');

const globalWithMongoose = global as typeof globalThis & {
  _mongooseCache?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};

const cached =
  globalWithMongoose._mongooseCache ?? { conn: null, promise: null };
if (!globalWithMongoose._mongooseCache) globalWithMongoose._mongooseCache = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false, maxPoolSize: 10 });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}