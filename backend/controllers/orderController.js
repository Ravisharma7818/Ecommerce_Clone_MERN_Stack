const catchAsyncError = require("../middlewares/catchAsyncError");
const Order = require("../models/order");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/product");





// Create Order => /api/v1/order/new


exports.addNewOrder = catchAsyncError(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
    } = req.body;
    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(200).json({
        success: true,
        order,
    });
});



// Get single order   =>   /api/v1/order/:id
