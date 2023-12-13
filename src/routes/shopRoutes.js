const express = require('express');
const shopControllers = require('../controllers/shopController');
const router = express.Router();

//Shop Routes:

router.get('/', shopControllers.shop);
router.get('/shop_funkos', shopControllers.shop_funkos);
router.get('/shop_llaveros', shopControllers.shop_llaveros);
router.get('/shop_remeras', shopControllers.shop_remeras);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.add);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.checkout);


module.exports = router;