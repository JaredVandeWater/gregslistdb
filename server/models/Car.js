import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true, default: '//placehold.it/300x300' },
        description: { type: String, minLength: 3 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default Car;