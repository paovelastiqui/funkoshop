const express = require('express');
const router = express.Router();

const { 
    admin, 
    createView, 
    createPost, 
    editView, 
    editPut, 
    deleteItem 
} = require('../controllers/admin.controller');

router.get('/', admin);
router.get('/create', createView);
router.post('/create', createPost);
router.get('/edit/:id', editView);
router.put('/edit/:id', editPut);
router.delete('/delete/:id', deleteItem);

module.exports = router;
