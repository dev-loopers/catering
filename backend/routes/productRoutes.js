const express = require('express');
const { addItem,getItemBySearch } = require('../controller/itemControlller');
const {getDishes,getDish} = require('../controller/productController');
const router = express.Router()
const {protectRoute} = require('../middleware/authMiddleware');


router.route('/products').get(getDishes);
router.route('/products/:id').get(getDish);
//items 
router.route('/additem').post(protectRoute,addItem);
router.route('/getItems').post(getItemBySearch);


module.exports = router;