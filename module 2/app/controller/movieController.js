const Movies = require("../models/Movies");
const Director = require("../models/Directors");
const movie = require("../models/Movies");

const getAllMovies = async (req, res) => {

    let queryString = JSON.stringify(req.query);
    queryString = 
        queryString.replace(/\b(gt|gte|lt|lte)\b/g, 
        match => `$${match}`);

    let query = Movies.find(JSON.parse(queryString));

    if (req.query.select) {
        const fields = req.query.select.split(",").join(" ");
        query = Movies.find({}).select(fields);
    }

    if (req.req.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = Movies.find({}).select(sortBy);
    }

    query = Movies.find({});
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.page) || 2;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    const movies = await query;
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