const express = require('express');
const mainControllers = require('../controllers/mainController');
const router = express.Router();

//Main Routes:

router.get('/home', mainControllers.home);
router.get('/contact', mainControllers.contact);
router.get('/about', mainControllers.about);
router.get('/faqs', mainControllers.faqs);


module.exports = router;