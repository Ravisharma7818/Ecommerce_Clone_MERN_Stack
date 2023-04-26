const express = require('express');

const router = express.Router();

const { getProducts, addNewProduct, getSingleProduct, updateProducts, deleteProduct } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/checkAuth');



router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), addNewProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProducts)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);



module.exports = router;