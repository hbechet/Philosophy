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
            return res.status(200).json({ success: true, data: createdUser })
        } else {
            return res.status(201).json({ success: false, data: 'User already exists!' })
        }
    } catch (error) {
        return res.status(400).json({ success: false, data: error.message });
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
                return res.status(200).json({ success: true, data: data, username: userByEmail[0].name, token: token, role: userByEmail[0].role })
            } else {
                return res.status(201).json({ success: false, data: 'Passwords do not match :(' })
            }
        } else {
            return res.status(201).json({ success: false, data: 'Email does NOT exists!' })
        }
    } catch (error) {
        return res.status(400).json({ success: false, data: error.message });
    }
};

//Authorization
const getProfile = async (req, res) => {
    try {
        const loggedUser = req.userData;
        return res.status(201).json({ success: true, message: 'You are authorized!', data: { name: loggedUser.name, email: loggedUser.email, role: loggedUser.role } })
    } catch (error) {
        return res.status(400).json({ success: false, data: error.message });
    }
};

//Get all user info, only for Admins
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        return res.status(200).json({ success: true, data: allUsers });
    } catch (error) {
        return res.status(400).json({ success: false, data: error.message });
    }
}

//Delete user
const deleteUser = async (req, res) => {
    try {
        //const loggedAdmin = req.adminData;
        const { id } = req.params;
        if (id) {
            const deletedUser = await User.findByIdAndDelete(id)
            if (!deletedUser) {
                return res.status(202).json({ success: false, data: 'That ID does NOT exist.' })
            } else {
                return res.status(200).json({ success: true, message: 'User deleted successfully!', data: deletedUser })
            }
        } else {
            return res.status(202).json({ success: false, data: 'You have to define an ID' })
        }

    } catch (error) {
        return res.status(400).json({ success: false, data: error.message });
    }
};

module.exports = { addUser, login, getProfile, deleteUser, getAllUsers };