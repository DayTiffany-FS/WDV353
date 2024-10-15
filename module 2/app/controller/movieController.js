const Movies = require("../models/Movies");

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
    const movie = await Movies.findById(id, body.req, {
        new: true
    })
    res.status(200).json({
        data: movie,
        success: true,
        message: `${req.method} - request to Movie endpoint`,
    });
};

const createMovie = async (req, res) => {
    const { movie } = req.body;
    try{
        const newMovie = await Moviess.create(director);
        console.log("data >>>", newMovie);
        res.status(200).json({
            sucess: true, 
            message: `${req.method} - request to Movie endpoint`,
        });
    } catch(error) {
        if (error.name == "ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
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