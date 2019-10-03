const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Student
let Student = new Schema({
    name: {
    type: String
    },
    last_name: {
    type: String
    },
    course_code: {
    type: String
    },
    average_grade: {
    type: Number
    }
    },{
    collection: 'student'
});
module.exports = mongoose.model('Student', Student);