const express = require('express');
const {getDishes,getDish} = require('../controller/productController');
const router = express.Router()


router.route('/products').get(getDishes);
router.route('/products/:id').get(getDish);


module.exports = router;