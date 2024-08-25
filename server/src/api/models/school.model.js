const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    philosophers: { type: [String] }
},
    {
        collection: 'schools',
        timestamps: true // createdAt + updatedAt
    }
);

const School = mongoose.model('schools', schoolSchema);
module.exports = School;