const express = require('express');
const { addUser, login, getProfile, deleteUser } = require('../controllers/user.controller');
const { isAuth, isAdmin } = require('../../middleware/auth');

const routeUsers = express.Router();

routeUsers.post('/new', addUser);
routeUsers.post('/login', login);

//view user profile
routeUsers.get('/profile', [isAuth], getProfile);

//delete user
routeUsers.delete('/delete', [isAdmin], deleteUser);

module.exports = routeUsers;