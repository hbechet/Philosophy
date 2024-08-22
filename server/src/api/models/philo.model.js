const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const philoSchema = new Schema({
    name: { type: String, require: true, unique: true },
    photo: { type: String, require: true },
    born_date: { type: Date },
    death_date: { type: Date },
    nationality: { type: String, require: true },
    schools: [String],
    ideas: [String]
},
    {
        collection: 'philosophers',
        timestamps: true // createdAt + updatedAt
    }
);

const Philosopher = mongoose.model('philosophers', philoSchema);
module.exports = Philosopher;