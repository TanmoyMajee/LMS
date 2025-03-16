import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'; 

const app = express();

// Middleware
app.use(cors());

// Connect to MongoDB
connectDB(); 

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});