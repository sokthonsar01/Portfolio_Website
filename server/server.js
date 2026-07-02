const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// CORS configuration to allow cross-origin requests
app.use(cors());

// Body parser middleware for JSON payloads
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);

// Fallback Route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Portfolio Backend API is running successfully!" });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
