const express = require('express');
const shopControllers = require('../controllers/shopController');
const router = express.Router();

//Shop Routes:

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.add);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.checkout);


module.exports = router;