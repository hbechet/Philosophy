const express = require('express');
const { getAllSchools } = require('../controllers/school.controller');

const routeSchools = express.Router();

routeSchools.get('/all', getAllSchools);

module.exports = routeSchools;