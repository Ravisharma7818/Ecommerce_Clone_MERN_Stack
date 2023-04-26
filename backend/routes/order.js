const express = require('express')
const router = express.Router();

const {
    addNewOrder,
    getSingleOrder,
    myOrders,
    allOrders,
    // updateOrder,
    // deleteOrder

} = require('../controllers/orderController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/checkAuth')

router.route('/order/new').post(isAuthenticatedUser, addNewOrder);

router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);

router.route('/admin/orders/').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
// router.route('/admin/order/:id')
//     .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
//     .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;