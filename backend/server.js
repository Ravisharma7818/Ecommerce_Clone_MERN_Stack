
const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'backend/.env' });


mongoose.connect("mongodb://localhost:27017/ShopHere", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Connected Success')).catch((err) => console.log(err));



const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} ${process.env.NODE_ENV}`)

});





// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})



// Handle Unhandles Promise Rejections

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`Server Down Because Of Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1)
    })
})