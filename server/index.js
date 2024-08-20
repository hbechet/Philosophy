const express = require('express');
const { connectDB } = require('./src/utils/db')
const cors = require('cors');
const app = express();

const env = require('dotenv')
env.config();

connectDB();
app.use(cors());  // Permitir CORS para todas las solicitudes
app.use(express.json());


const data = [
    { id: '1', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '2', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '3', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '101', image: 'p.png', name: 'Keyboards Provider', email: 'keyboards@provider.com', phone: '910000000' },
    { id: '102', image: 'p.png', name: 'Mouse Provider', email: 'mouse@provider.com', phone: '910000001' },
    { id: '103', image: 'p.png', name: 'PC Provider', email: 'pc@provider.com', phone: '910000002' },
];

// Endpoint GET con parámetro en la URL
app.get('/api/endpoint/data', (req, res) => {
    res.send(data);
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});