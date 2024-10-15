const mongoose = require("mongoose");

const yearsSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, "You must enter the year the movie was released."],
        trim: true,
        maxlength: [4, "You have entered an invalid year."],
    },
});

module.exports = mongoose.model('Year', yearsSchema);