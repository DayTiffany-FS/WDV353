const Movies = require("../models/Movies");
const Director = require("../models/Directors");
const movie = require("../models/Movies");

const getAllMovies = async (req, res) => {
    const movies = await Movies.find({});
    res.status(200).json({
        data: movies,
        sucess: true, 
        message: `${req.method} - request to Movie endpoint`,
    });
};

const getMoviebyID = async (req, res) => {
    const { id } = req.params;
    const movies = await Movies.findById(id, body.req, {
        new: true
    })
    res.status(200).json({
        data: movie,
        success: true,
        message: `${req.method} - request to Movie endpoint`,
    });
};

const createMovie = async (req, res) => {
    try{
        const { Movies } = req.body;
        const user = await Director.findById(movie.director);
        Movies.director = user;
        const movieData = new Movie(Movies);
        user.Movies.push(movieData._id);
        const queries = [movieData.save(), user.save()];
        await Promise.all(queries);
        res.status(200).json({
            data: movieData,
            sucess: true, 
            message: `${req.method} - request to Movie endpoint`,
        });
    } catch({message}) {
        res.status(500).json({
            success: false,
            message,
        });
    }
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const movie = await Movies.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: movie,
        success: true,
        message: `${req.method} - request to Movie endpoint`,
    });
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const deletedMovie = await Movies.findByIdAndDelete(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: deleteMovie,
        success: true,
        message: `${req.method} - request to Movie endpoint`,
    });
};

module.exports = {
    createMovie,
    getAllMovies,
    getMoviebyID,
    updateMovie,
    deleteMovie,
};