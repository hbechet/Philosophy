const School = require('../models/school.model');

const getAllSchools = async (req, res) => {
    try {
        const allSchools = await School.find()
        res.status(200).json({ success: true, data: allSchools })
    } catch (error) {
        res.status(400).json({ success: false, data: error });
    }
};

module.exports = { getAllSchools };