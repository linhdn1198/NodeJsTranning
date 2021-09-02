const Courses = require('../../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Courses.find({})
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
