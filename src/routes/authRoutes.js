const express = require('express');
const authControllers = require('../controllers/authController.js');
const router = express.Router();

//Auth Routes:

router.get('/login', authControllers.loginView);
router.post('/login', authControllers.login);
router.get('/register', authControllers.registerView);
router.post('/register', authControllers.register);
router.get('/logout', authControllers.logout);

module.exports = router;