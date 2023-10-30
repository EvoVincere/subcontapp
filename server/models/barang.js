import mongoose from "mongoose";

const goodsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Good = mongoose.model('Rubber',goodsSchema)