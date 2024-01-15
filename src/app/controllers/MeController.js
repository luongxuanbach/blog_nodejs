const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        Course.find({}).then(courses => res.render('me/stored-courses', {
            courses: multipleMongooseToObject(courses)
        }))
        .catch(next);
    }    
}

module.exports = new CourseController();
