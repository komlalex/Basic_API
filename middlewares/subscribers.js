const Subscriber = require("../models/subscribers");

// @desc A middleware function to get subscribers by id
const getById = async (req, res, next) => {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);

        if (subscriber === null) {
            return res.status(404).json({message: "Subscriber not found."})
        }
        
    } catch (err) {

        if (err.name === "CastError") {
            return res.status(400).json({message: "Subscriber does not exist."})
        }

        return res.status(500).json({message: err.message})
    }

    res.subscriber = subscriber;
    next()
}

module.exports = getById;