import Turf from "../models/Turf.js";
import Futsal from "../models/Futsal.js";
import { createError } from "../utils/error.js";

export const createTurf = async (req, res, next) => {
    const futsalId = req.params.futsalid;
    const newTurf = new Turf(req.body)

    try {
        const savedTurf = await newTurf.save()
        try {
            await Futsal.findByIdAndUpdate(futsalId, {
                $push: {
                    turfs: savedTurf._id,
                }
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedTurf);
    } catch (err) {
        next(err)
    }
};

export const updateTurf = async (req, res, next) => {

    try {
        const updatedTurf = await Turf.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTurf);
    } catch (err) {
        next(err);
    }
};

export const deleteTurf = async (req, res, next) => {
    const futsalId = req.params.futsalid;
    try {
        await Turf.findByIdAndDelete(req.params.id);
        try {
            await Futsal.findByIdAndUpdate(futsalId, {
                $pull: {
                    turfs: req.params.id,
                }
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json("Turf has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getTurf = async (req, res, next) => {

    try {
        const turf = await Turf.findById(req.params.id);
        res.status(200).json(turf);
    } catch (err) {
        next(err);
    }
};

export const getTurfs = async (req, res, next) => {

    try {
        const turfs = await Turf.find();
        res.status(200).json(turfs);
    } catch (err) {
        next(err);
    }
};