const Course = require('../../models/Course');

class CourseController {
    // [GET] /:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => res.render('course/show', { course }))
            .catch(next);
    }

    // [GET] /create
    create(req, res) {
        res.render('course/create');
    }

    // [POST] /store
    store(req, res, next) {
        const { name, description, image } = req.body;

        Course.create({ name, description, image })
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CourseController();
