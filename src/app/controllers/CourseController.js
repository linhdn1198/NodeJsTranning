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
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [GET] /:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .lean()
            .then((course) => res.render('course/edit', { course }))
            .catch(next);
    }

    // [POST] /:id/update
    update(req, res, next) {
        const { name, description, image } = req.body;

        Course.findOneAndUpdate(
            { _id: req.params.id },
            { name, description, image },
        )
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
