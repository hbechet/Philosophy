const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Permitir CORS para todas las solicitudes
app.use(express.json());

// // Endpoint GET
// app.get('/api/endpoint', (req, res) => {
//     res.send('Soy un endpoint GET');
// });

const data = [
    { id: '1', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '2', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '3', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '4', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '5', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '6', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '7', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '8', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '9', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '10', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '11', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '12', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '13', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '14', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '15', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '16', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '17', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '18', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '19', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '20', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '21', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '22', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '1', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '2', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '3', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '4', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '5', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '6', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '7', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '8', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '9', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '10', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '11', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '12', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '13', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '14', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '15', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '16', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '17', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '18', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '19', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '20', image: 'keyboard.png', name: 'Keyboard', quantity: 4, provider: '101' },
    { id: '21', image: 'mouse.png', name: 'Mouse', quantity: 10, provider: '102' },
    { id: '22', image: 'pc.png', name: 'PC', quantity: 5, provider: '103' },
    { id: '101', image: 'p.png', name: 'Keyboards Provider', email: 'keyboards@provider.com', phone: '910000000' },
    { id: '102', image: 'p.png', name: 'Mouse Provider', email: 'mouse@provider.com', phone: '910000001' },
    { id: '103', image: 'p.png', name: 'PC Provider', email: 'pc@provider.com', phone: '910000002' },
];

// Endpoint GET con parámetro en la URL
app.get('/api/endpoint/data', (req, res) => {
    res.send(data);
});

// Endpoint POST
// app.post('/api/endpoint', (req, res) => {
//     res.send('Soy un endpoint POST');
// });

// Endpoint POST
app.post('/api/endpoint', (req, res) => {
    const { name } = req.body;  // Extraer el nombre del cuerpo de la solicitud
    res.send(`Hola, ${name}! Tu nombre ha sido recibido.`);
});

// Endpoint PUT
app.put('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint PUT');
});

// Endpoint PATCH
app.patch('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint PATCH');
});

// Endpoint DELETE
app.delete('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint DELETE');
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});