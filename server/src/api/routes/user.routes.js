const express = require('express');
const { addUser, login, getProfile, deleteUser, getAllUsers } = require('../controllers/user.controller');
const { isAuth, isAdmin } = require('../../middleware/auth');

const routeUsers = express.Router();

routeUsers.post('/new', addUser);
routeUsers.post('/login', login);

//view user profile
routeUsers.get('/profile', [isAuth], getProfile);

//view all users
routeUsers.get('/all', [isAdmin], getAllUsers);

//delete user
routeUsers.delete('/delete/:id', [isAdmin], deleteUser);

module.exports = routeUsers;