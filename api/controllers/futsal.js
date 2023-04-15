import Futsal from "../models/Futsal.js";

export const createFutsal = async (req, res, next) => {
    const newFutsal = new Futsal(req.body);

    try {
        const savedFutsal = await newFutsal.save()
        res.status(200).json(savedFutsal);
    } catch (err) {
        next(err);
    }
};

export const updateFutsal = async (req, res, next) => {

    try {
        const updatedFutsal = await Futsal.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedFutsal);
    } catch (err) {
        next(err);
    }
};

export const deleteFutsal = async (req, res, next) => {

    try {
        await Futsal.findByIdAndDelete(req.params.id);
        res.status(200).json("Futsal has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getFutsal = async (req, res, next) => {

    try {
        const futsal = await Futsal.findById(req.params.id);
        res.status(200).json(futsal);
    } catch (err) {
        next(err);
    }
};

export const getFutsals = async (req, res, next) => {

    try {
        const futsals = await Futsal.find();
        res.status(200).json(futsals);
    } catch (err) {
        next(err);
    }
};