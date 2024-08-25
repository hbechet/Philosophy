const express = require('express');
const { getAllSchools, getSchoolbyId, createSchool, deleteSchool, updateSchool } = require('../controllers/school.controller');

const routeSchools = express.Router();

routeSchools.get('/all', getAllSchools);
routeSchools.get('/:id', getSchoolbyId);
routeSchools.post('/new', createSchool);
routeSchools.delete('/delete/:id', deleteSchool);
routeSchools.put('/update/:id', updateSchool);

module.exports = routeSchools;