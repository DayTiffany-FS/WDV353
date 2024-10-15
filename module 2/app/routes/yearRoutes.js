const router = require("express").Router();
const {
    createYear,
    getAllYears,
    getYearbyID,
    updateYear,
    deleteYear,
} = require("../controller/yearController");

router.get("/", getAllYears);

router.get("/:id", getYearbyID);

router.post("/", createYear);

router.put("/:id", updateYear);

router.delete("/:id", deleteYear);

module.exports = router;