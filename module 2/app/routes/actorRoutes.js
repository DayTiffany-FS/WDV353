const router = require("express").Router();
const {
    createActor,
    getAllActors,
    getActorbyID,
    updateActor,
    deleteActor,
} = require("../controller/actorController");

router.get("/", getAllActors);

router.get("/:id", getActorbyID);

router.post("/", createActor);

router.put("/:id", updateActor);

router.delete("/:id", deleteActor);

module.exports = router;