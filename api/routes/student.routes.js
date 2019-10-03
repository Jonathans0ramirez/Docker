const express = require('express');
const app = express();
const studentRoutes = express.Router();

// Require Student model in our routes module
let Student = require('../models/Student');

// Crear un registro
studentRoutes.route('/add').post(function (req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'student added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Entregar colección
studentRoutes.route('/').get(function (req, res) {
    Student.find(function (err, students){
        if(err){
            console.log(err);
        }
        else {
            res.json(students);
        }
    });
});

// Entregar un registro
studentRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Student.findById(id, function (err, student){
        res.json(student);
    });
});

// Modificar un registro
studentRoutes.route('/update/:id').post(function (req, res, next) {
    Student.findById(req.params.id, function (err,  student) {
        if (!student)
            return next(new Error('Could not load Document'));
        else {
            student.name = req.body.name;
            student.surename = req.body.surename;
            student.level = req.body.level;
            student.average_grade = req.body.average_grade;

            student.save().then(student => {
                res.json('Update completed');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Eliminar un registro
studentRoutes.route('/delete/:id').get(function (req, res) {
    Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentRoutes;