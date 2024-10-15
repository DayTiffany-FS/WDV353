const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
        });
        //console.log(`Connected to MongoDB successfully on ${conn.})
        console.log(`Connected to MongoDB successfully on 5000`)
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;