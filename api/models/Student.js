const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Student = new Schema({
    name: {
    type: String
    },
    surename: {
    type: String
    },
    level: {
    type: Number
    },
    average_grade: {
    type: Number
    }
    },{
    collection: 'students'
});
module.exports = mongoose.model('Student', Student);