const express = require('express');
const { getAllPhilos, getPhilobyId, createPhilosopher, deletePhilosopher, updatePhilosopher } = require('../controllers/philo.controller');

const routePhilos = express.Router();

routePhilos.get('/all', getAllPhilos);
routePhilos.get('/:id', getPhilobyId);
routePhilos.post('/new', createPhilosopher);
routePhilos.delete('/delete/:id', deletePhilosopher);
routePhilos.put('/update/:id', updatePhilosopher);

module.exports = routePhilos;