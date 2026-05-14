const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// MongoDB setup and start server
async function startServer() {
  try {
    const mongoUri = 'mongodb://127.0.0.1:27017/taskapp';
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected to: ${mongoUri}`);
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server (Make sure MongoDB is running locally):', error);
    process.exit(1);
  }
}

startServer();
