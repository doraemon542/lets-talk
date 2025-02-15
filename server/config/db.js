// config/db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

export async function connectToDB() {
  try {
    await client.connect();
    db = client.db('lets_talk'); // Replace with your database name
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

export function getDB() {
  return db;
}