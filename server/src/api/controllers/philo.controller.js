const Philosopher = require('../models/philo.model');
const { deleteFile } = require('../../utils/deleteFileCloud')

const getAllPhilos = async (req, res) => {
    try {
        const allPhilos = await Philosopher.find();
        res.status(200).json({ success: true, data: allPhilos });
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

const getPhilobyId = async (req, res) => {
    try {
        const { id } = req.params;
        const filteredPhilo = await Philosopher.findById(id);
        if (!filteredPhilo) {
            res.status(202).json({ success: false, message: 'That ID does NOT exist.' });
        } else {
            res.status(200).json({ success: true, data: filteredPhilo });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

const createPhilosopher = async (req, res) => {
    try {
        const newPhilo = new Philosopher(req.body);
        const findPhilo = await Philosopher.find({ name: newPhilo.name });

        if (findPhilo.length === 0) {
            if (req.file.path) {
                newPhilo.photo = req.file.path;
            }
            const createdPhilo = await newPhilo.save();
            res.status(201).json({ success: true, data: createdPhilo });
        } else {
            res.status(200).json({ success: false, message: 'Philosopher already exists!' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

const deletePhilosopher = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const deletedPhilo = await Philosopher.findByIdAndDelete(id);
            if (!deletedPhilo) {
                res.status(202).json({ DeleteSuccess: false, message: 'That ID does NOT exist.' });
            } else {
                res.status(200).json({ DeleteSuccess: true, message: 'Philosopher deleted successfully!', deletedPhilosopher: deletedPhilo });
                deleteFile(deletedPhilo.photo);
            }
        } else {
            res.status(202).json({ DeleteSuccess: false, message: 'You have to define an ID' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

const updatePhilosopher = async (req, res) => {
    try {
        const { id } = req.params;
        const updateBody = req.body;
        if (id) {
            const updatedPhilo = await Philosopher.findByIdAndUpdate(id, updateBody, { new: true });
            if (!updatedPhilo) {
                res.status(202).json({ DeleteSuccess: false, message: 'That ID does NOT exist.' });
            } else {
                res.status(200).json({ DeleteSuccess: true, message: 'Philosopher updated successfully!', updatedPhilosopher: updatedPhilo });
            }
        } else {
            res.status(202).json({ DeleteSuccess: false, message: 'You have to define an ID' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

module.exports = { getAllPhilos, getPhilobyId, createPhilosopher, deletePhilosopher, updatePhilosopher };