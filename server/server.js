// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDB } from './config/db.js'; // Add .js extension
import authRoutes from './routes/authRoutes.js'; // Add .js extension

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectToDB();

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});