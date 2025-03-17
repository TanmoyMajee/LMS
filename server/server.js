import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import { clerkWebhook } from './controllers/webhooks.js';

const app = express();

// Middleware
app.use(cors());

// Connect to MongoDB
connectDB(); 

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/clerk', express.json(), clerkWebhook);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});