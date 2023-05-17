
const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv').config({ path: 'backend/.env' });
const path = require('path')
const cookieParser = require('cookie-parser')

//  Import Routes


const products = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');
const payment = require('./routes/payment');



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
// Set Cloudinary Configuration 



app.use('/api/v1', products);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment)

// For Production

if (process.env.NODE_ENV === 'PRODUCTION') {
    console.log('Hey I Am Running');
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
    })
}


// Position is Fixed Here After Routes  
app.use(errorMiddleware)
// Error Middleware For Handling Errors


module.exports = app