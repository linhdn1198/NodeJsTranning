const express = require('express');
const router = express.Router();
const sitesController = require('../app/controllers/SitesController');


router.get('/search', sitesController.search);
router.use('/', sitesController.index);


module.exports = router;
