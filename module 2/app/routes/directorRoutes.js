const router = require("express").Router();
const {
    createDirector,
    getAllDirectors,
    getDirectorbyID,
    updateDirector,
    deleteDirector,
} = require("../controller/directorController");

router.get("/", getAllDirectors);

router.get("/:id", getDirectorbyID);

router.post("/", createDirector);

router.put("/:id", updateDirector);

router.delete("/:id", deleteDirector);

module.exports = router;