const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoDbUrl = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
        mongoose.set("strictQuery", false);
      
        const connected =  await mongoose.connect(mongoDbUrl);
        console.log('Connected to MongoDB', mongoose.connection.host);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDb};

