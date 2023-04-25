const catchAsyncError = require('../middlewares/catchAsyncError.js');
const Product = require('../models/product.js')
const ErrorHandler = require('../utils/errorHandler.js')
const APIFeatures = require('../utils/apiFeatures.js')

exports.getProducts = catchAsyncError(async (req, res, next) => {
    const apifeatures = new APIFeatures(Product.find(), req.query)
        .search()
    const Products = await apifeatures.query
    res.status(200).json({
        success: true,
        message: Products
    })
}
)


exports.addNewProduct = catchAsyncError(async (req, res, next) => {


    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    })

})


// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('!Oops Product not found ', 404));
    }


    res.status(200).json({
        success: true,
        product
    })

})


// 

exports.updateProducts = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })

})



// Delete product By Admin

exports.deleteProduct = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    product = await Product.deleteOne();


    res.status(200).json({
        success: true,
        product
    })

})
