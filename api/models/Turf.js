import mongoose from 'mongoose';
const { Schema } = mongoose;

const TurfSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    turfNumber: [{ number: Number, unavailableDates: { type: [Date] } }],
}, { timestamps: true });

export default mongoose.model("Turf", TurfSchema);