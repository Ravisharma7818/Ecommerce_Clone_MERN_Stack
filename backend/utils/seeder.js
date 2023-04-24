const mongoose = require('mongoose');
const Product = require('../models/product');
const app = require('../app')
const dotenv = require('dotenv').config({ path: 'backend/.env' });

mongoose.connect("mongodb://localhost:27017/ShopHere", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Connected Success')).catch((err) => console.log(err));


const products = require('../data/products');




const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()