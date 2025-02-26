const mongoose = require('mongoose');

const connectDB = async (req, res, next) =>{
    await mongoose.connect('mongodb+srv://harsh:harsh123@cluster0.oypby.mongodb.net/devTinder')
}

module.exports = connectDB;

