const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must enter a movie title!"],
        unique: [true, "You must pick the original version of this movie to list."],
        trim: true,
        maxlength: [50, "Your movie title is too long."],
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director'
    }
});

module.exports = mongoose.model('Movie', moviesSchema);