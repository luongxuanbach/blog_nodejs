const Course = require('../models/Course')

class SiteController {
    // [GET] /news
    index(req, res) {

        res.json({
            name: "test"
        })
        // res.render('news');
    }

    // [GET] /news/:slug
    search(req, res) {
        res.send('Searched');
    }
}

module.exports = new SiteController();