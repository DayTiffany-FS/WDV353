const mongoose = require("mongoose");

const directorsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "You must enter a first name!"],
        trim: true,
        maxlength: [50,"Your first name is too long"],

    },
    lastName: {
        type: String,
        required: [true, "You must enter a last name!"],
        trim: true,
        maxlength: [50, "Your last name is too long."],
    },
    movieTitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }
});

module.exports = mongoose.model('Director', directorsSchema);