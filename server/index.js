const express = require('express');
const { connectDB } = require('./src/utils/db')
const routePhilos = require('./src/api/routes/philo.routes');
const routeSchools = require('./src/api/routes/school.routes');
const routeUsers = require('./src/api/routes/user.routes');
const cors = require('cors');
const server = express();

const env = require('dotenv')
env.config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

connectDB();
server.use(cors());
server.use(express.json());

server.use('/api/philos', routePhilos);
server.use('/api/schools', routeSchools);
server.use('/api/users', routeUsers);

// Start server in port 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});