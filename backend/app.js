const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors')
const bodyParser = require('body-parser')

//  Import Routes


const products = require('./routes/product');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', products);
// Position is Fixed Here After Routes 
app.use(errorMiddleware)
// Error Middleware For Handling Errors


module.exports = app