const express = require("express");
const router = express.Router();
const directorRoutes = require("./directorRoutes");
const movieRoutes = require("./movieRoutes");
const actorRoutes = require("./actorRoutes");
const yearRoutes = require("./yearRoutes");

router.get("/", (req, res) => {
    res.status(200).json({
        success: true, 
        message: `${req.method} - Request made`});
});

router.use("/directors", directorRoutes);

router.use("/movies", movieRoutes);

router.use("/actors", actorRoutes);

router.use("/years", yearRoutes);

module.exports = router;