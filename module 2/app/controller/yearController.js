const Years = require("../models/Years");

const getAllYears = async (req, res) => {
    const years = await Years.find({});
    res.status(200).json({
        data: years,
        sucess: true, 
        message: `${req.method} - request to Year endpoint`,
    });
};

const getYearbyID = async (req, res) => {
    const { id } = req.params;
    const year = await Years.findById(id, body.req, {
        new: true
    });
    res.status(200).json({
        data: year,
        success: true,
        message: `${req.method} - request to Year endpoint`,
    });
};

const createYear = async (req, res) => {
    const { year } = req.body;
    try{
        const newYear = await Years.create(director);
        console.log("data >>>", newYear);
        res.status(200).json({
            sucess: true, 
            message: `${req.method} - request to Year endpoint`,
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

const updateYear = async (req, res) => {
    const { id } = req.params;
    const year = await Years.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: year,
        success: true,
        message: `${req.method} - request to Year endpoint`,
    });
};

const deleteYear = async (req, res) => {
    const { id } = req.params;
    const deletedYear = await Years.findByIdAndDelete(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: deleteYear,
        success: true,
        message: `${req.method} - request to Year endpoint`,
    });
};

module.exports = {
    createYear,
    getAllYears,
    getYearbyID,
    updateYear,
    deleteYear,
};