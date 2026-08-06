const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./app'); // Import the configured express app

// Load env vars
dotenv.config();

// console.log(process.env.MONGODB_URI);

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});