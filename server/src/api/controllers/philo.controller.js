const Philosopher = require('../models/philo.model');

const getAllPhilos = async (req, res) => {
    try {
        const allPhilos = await Philosopher.find()
        res.status(201).json({ success: true, data: allPhilos })
    } catch (error) {
        res.json(error);
    }
}

module.exports = { getAllPhilos };