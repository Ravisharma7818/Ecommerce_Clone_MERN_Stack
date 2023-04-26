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
    updateProfile
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

module.exports = router;