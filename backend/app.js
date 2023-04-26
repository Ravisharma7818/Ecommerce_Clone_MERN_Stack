
const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors')
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

//  Import Routes


const products = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/v1', products);
app.use('/api/v1', user);
app.use('/api/v1', order);


// Position is Fixed Here After Routes 
app.use(errorMiddleware)
// Error Middleware For Handling Errors


module.exports = app