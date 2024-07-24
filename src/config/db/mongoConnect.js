const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const uri = process.env.MONGO_DB_CONNECTION_STRING
const connectDB = async () => {
    try {
        await mongoose.connect(uri)
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;
