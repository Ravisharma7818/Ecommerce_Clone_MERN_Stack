const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
    logout,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser,
} = require('../controllers/userController');


const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/checkAuth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);




router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/password/update').put(isAuthenticatedUser, updatePassword);


router.route('/me').get(isAuthenticatedUser, getUserProfile)
router.route('/me/update').put(isAuthenticatedUser, updateProfile)


// Admin Route For Users
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers)
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router;