import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
    {
        title: { type: String, required: true },
        rate: { type: Number, required: true },
        description: { type: String, minLength: 3 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default Job;