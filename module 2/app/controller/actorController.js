const Actors = require("../models/Actors");

const getAllActors = async (req, res) => {
    const actors = await Actors.find({});
    res.status(200).json({
        data: actors,
        sucess: true, 
        message: `${req.method} - request to Actor endpoint`,
    });
};

const getActorbyID = async (req, res) => {
    const { id } = req.params;
    const actor = await Actors.findById(id, body.req, {
        new: true
    })
    res.status(200).json({
        data: actor,
        success: true,
        message: `${req.method} - request to Actor endpoint`,
    });
};

const createActor = async (req, res) => {
    const newActor = await Actors.create(director);
    console.log("data >>>", newActor);
    res.status(200).json({
        sucess: true, 
        message: `${req.method} - request to Actor endpoint`,
    });
};

const updateActor = async (req, res) => {
    const { actor } = req.params;
    try{
        const actor = await Actors.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json({
            data: actor,
            success: true,
            message: `${req.method} - request to Actor endpoint`,
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

const deleteActor = async (req, res) => {
    const { id } = req.params;
    const deletedActor = await Actors.findByIdAndDelete(id, req.body, {
        new: true
    });
    res.status(200).json({
        data: deleteActor,
        success: true,
        message: `${req.method} - request to Actor endpoint`,
    });
};

module.exports = {
    createActor,
    getAllActors,
    getActorbyID,
    updateActor,
    deleteActor,
};