const Subscriber = require("../models/subscribers");



// @route GET /subscribers
// @desc Get all subscribers
const getAll = async (req, res) => {
        try {
            const subscribers = await Subscriber.find();
            return res.json(subscribers)
        } catch (err) {
            return res.status(500).json({message: err.message})
        }
}

// @route GET subscribers/:id
// @desc Get one subcriber
const getOne = async (req, res) => {
    const subscriber = res.subscriber;
    res.json(subscriber.name);
}

// @route POST subscribers
// @desc Create one subscriber
const createOne = async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save();
        res.status(200).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// @route PATCH subscribers/:d
// @desc Update one subcriber
const updateOne = async (req, res) => {
    try {
        if (req.body.name) {
            res.subscriber.name = req.body.name;
        }

        if (req.body.subscribedToChannel) {
            res.subscriber.subscribedToChannel = req.body.subscribedToChannel
        }

        try {
            const updatedSubcriber = await res.subscriber.save()
            res.status(200).json(updatedSubcriber)
        } catch (err) {
            return res.status(400).json({message: err.message})
        }
    } catch (err) {
        return res.status(400).json({message: err.message})
    }
}

// @route DELETE subscribers/:id
// @desc Delete one subscriber
const deleteOne = async (req, res) => {
    try {
        await Subscriber.findByIdAndDelete(res.subscriber._id);
        res.json({message: "Unsubscribed"})
    } catch (err) {
        res.status(500).json(500)
    }
}


module.exports = {getAll, getOne, createOne, updateOne, deleteOne}