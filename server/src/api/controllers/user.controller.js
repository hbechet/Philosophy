const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt')


const addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const findUser = await User.find({ email: newUser.email });

        if (findUser.length === 0) {

            // "Encrypt" password before saving user to database
            newUser.password = bcrypt.hashSync(newUser.password, 10);

            const createdUser = await newUser.save();
            res.status(200).json({ success: true, data: createdUser })
        } else {
            res.status(201).json({ success: false, message: 'User already exists!' })
        }
    } catch (error) {
        res.json(error);
    }
};

//authentication
const login = async (req, res) => {
    try {
        const loggedUser = new User(req.body);
        const userByEmail = await User.find({ email: loggedUser.email });

        if (userByEmail.length !== 0) {

            if (bcrypt.compareSync(loggedUser.password, userByEmail[0].password)) {
                // Create JWT and return it
                const data = { id: userByEmail[0]._id, email: userByEmail[0].email }
                const token = generateToken(data);
                res.status(200).json({ LoginSuccess: true, user: data, token: token })
            } else {
                res.status(201).json({ LoginSuccess: false, message: 'Passwords do not match :(' })
            }
        } else {
            res.status(201).json({ LoginSuccess: false, message: 'Email does NOT exists!' })
        }
    } catch (error) {
        res.json(error);
    }
};

//Authorization
const getProfile = async (req, res) => {
    try {
        const loggedUser = req.userData;
        res.status(201).json({ AuthSuccess: true, message: 'You are authorized!', user: loggedUser.email, role: loggedUser.role })
    } catch (error) {
        res.json(error);
    }
};

//Get all user info, only for Admins
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ success: true, data: allUsers });
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

//Delete user
const deleteUser = async (req, res) => {
    try {
        //const loggedAdmin = req.adminData;
        const { id } = req.query;
        if (id) {
            const deletedUser = await User.findByIdAndDelete(id)
            if (!deletedUser) {
                res.status(202).json({ DeleteSuccess: false, message: 'That ID does NOT exist.' })
            } else {
                res.status(200).json({ DeleteSuccess: true, message: 'User deleted successfully!', deletedEntry: deletedUser })
                deleteFile(deletedUser.image);
            }
        } else {
            res.status(202).json({ DeleteSuccess: false, message: 'You have to define an ID' })
        }
        //res.status(201).json({ AuthSuccess: true, message: 'You are authorized to delete!', user: loggedAdmin.email, role: loggedAdmin.role })
    } catch (error) {
        res.json(error);
    }
};

module.exports = { addUser, login, getProfile, deleteUser, getAllUsers };