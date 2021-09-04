const Course = require('../../models/Course');

class MeController {
    // [GET] /stored/courses
    index(req, res, next) {
        Promise.all([Course.find({}).lean(), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', { courses, deletedCount });
            })
            .catch(next);
    }

    // [GET] /trash/courses
    trash(req, res, next) {
        Course.findDeleted({})
            .lean()
            .then((courses) => res.render('me/trash-courses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
