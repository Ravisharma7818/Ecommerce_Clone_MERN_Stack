const Product = require('../models/product.js')
exports.getProducts = async (req, res, next) => {
    const Products = await Product.find({});
    res.status(200).json({
        success: true,
        message: Products
    })
}



exports.addNewProduct = async (req, res, next) => {
    try {

        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error);
        res.status(200).json({
            success: true,
            error
        })
    }
}


// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }


    res.status(200).json({
        success: true,
        product
    })

}


// 

exports.updateProducts = async (req, res, next) => {

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

}



// Delete product By Admin

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    product = await Product.deleteOne();


    res.status(200).json({
        success: true,
        product
    })

}