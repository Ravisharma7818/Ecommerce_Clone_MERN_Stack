const express = require('express');

const router = express.Router();

const { getProducts, addNewProduct, getSingleProduct, updateProducts, deleteProduct, createProductReview,
    getProductReviews, getAdminProducts,
    deleteReview } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/checkAuth');



router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), addNewProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProducts)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);



router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router;