const express = require('express');
const router = express.Router();

const {
    shop,
    item,
    add,
    cart,
    checkout
} = require('../controllers/shop.controller');

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', add);
router.get('/cart', cart);
router.post('/cart', checkout);

module.exports = router;