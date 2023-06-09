
const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'backend/.env' });
const cloudinary = require('cloudinary');



async function connectDatabase() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}
connectDatabase();
// Set Cloudinary Configuration 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} ${process.env.NODE_ENV} ${process.env.MONGO_URI}`)

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
