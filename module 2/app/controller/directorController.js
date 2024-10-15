const Directors = require("../models/Directors");

const getAllDirectors = async (req, res) => {
    const directors = await Directors.find({});
    res.status(200).json({
        data: directors,
        sucess: true, 
        message: `${req.method} - request to Director endpoint`,
    });
};

const getDirectorbyID = async (req, res) => {
    const { id } = req.params;
    const director = await Directors.findById(id, body.req, {
        new: true
    });
    res.status(200).json({
        data: director,
        success: true,
        message: `${req.method} - request to Director endpoint`,
    });
};

const createDirector = async (req, res) => {
    const {director} = req.body;
    try {
        const newDirector = await Directors.create(director);
        console.log("data >>>", newDirector);
        res.status(200).json({
            sucess: true, 
            message: `${req.method} - request to Director endpoint`,
        });
    } catch (error) {
        if (error.name == "ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

const updateDirector = async (req, res) => {
    const { id } = req.params;
    const director = await Directors.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: director,
        success: true,
        message: `${req.method} - request to Director endpoint`,
    });
};

const deleteDirector = async (req, res) => {
    const { id } = req.params;
    const deletedDirector = await Directors.findByIdAndDelete(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: deleteDirector,
        success: true,
        message: `${req.method} - request to Director endpoint`,
    });
};

module.exports = {
    createDirector,
    getAllDirectors,
    getDirectorbyID,
    updateDirector,
    deleteDirector,
};