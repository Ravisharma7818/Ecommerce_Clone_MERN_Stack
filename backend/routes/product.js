const express = require('express');

const router = express.Router();

const { getProducts, addNewProduct, getSingleProduct, updateProducts, deleteProduct } = require('../controllers/productController')



router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);


router.route('/products/new').post(addNewProduct);


router.route('/admin/product/new').post(addNewProduct);

router.route('/admin/product/:id')
    .put(updateProducts)
    .delete(deleteProduct);



module.exports = router;