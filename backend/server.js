const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: 'backend/.env' });

mongoose.connect("mongodb://localhost:27017/ShopHere", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Connected Success')).catch((err) => console.log(err));



app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} ${process.env.NODE_ENV}`)

});

