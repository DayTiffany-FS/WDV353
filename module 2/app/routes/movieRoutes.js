const router = require("express").Router();
const {
    createMovie,
    getAllMovies,
    getMoviebyID,
    updateMovie,
    deleteMovie,
} = require("../controller/movieController");

router.get("/", getAllMovies);

router.get("/:id", getMoviebyID);

router.post("/", createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;