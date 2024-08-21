const express = require('express');
const { getAllPhilos } = require('../controllers/philo.controller');

const routePhilos = express.Router();

routePhilos.get('/all', getAllPhilos);

module.exports = routePhilos;