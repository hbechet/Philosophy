const School = require('../models/school.model');

const getAllSchools = async (req, res) => {
    try {
        const allSchools = await School.find();
        res.status(200).json({ success: true, data: allSchools });
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

const getSchoolbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const filteredSchool = await School.findById(id);
        if (!filteredSchool) {
            res.status(202).json({ success: false, message: 'That ID does NOT exist.' });
        } else {
            res.status(200).json({ success: true, data: filteredSchool });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

const createSchool = async (req, res) => {
    try {
        const newSchool = new School(req.body);
        const findSchool = await School.find({ name: newSchool.name });

        if (findSchool.length === 0) {
            const createdSchool = await newSchool.save();
            res.status(201).json({ success: true, data: createdSchool });
        } else {
            res.status(200).json({ success: false, message: 'School of Thought already exists!' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
}

const deleteSchool = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const deletedSchool = await School.findByIdAndDelete(id);
            if (!deletedSchool) {
                res.status(202).json({ DeleteSuccess: false, message: 'That ID does NOT exist.' });
            } else {
                res.status(200).json({ DeleteSuccess: true, message: 'School of Thought deleted successfully!', deletedEntry: deletedSchool });
            }
        } else {
            res.status(202).json({ DeleteSuccess: false, message: 'You have to define an ID' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

const updateSchool = async (req, res) => {
    try {
        const { id } = req.params;
        const updateBody = req.body;
        if (id) {
            const updatedSchool = await School.findByIdAndUpdate(id, updateBody, { new: true });
            if (!updatedSchool) {
                res.status(202).json({ DeleteSuccess: false, message: 'That ID does NOT exist.' });
            } else {
                res.status(200).json({ DeleteSuccess: true, message: 'School of Thought updated successfully!', updatedEntry: updatedSchool });
            }
        } else {
            res.status(202).json({ DeleteSuccess: false, message: 'You have to define an ID' });
        }
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

module.exports = { getAllSchools, getSchoolbyId, createSchool, deleteSchool, updateSchool };