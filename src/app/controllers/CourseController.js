const Courses = require('../../models/Course');

class CourseController {
    // [GET] /show/:slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .lean()
            .then(course => res.render('course/show', {course}))
            .catch(next);
    }
}

module.exports = new CourseController();
