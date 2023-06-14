const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 160,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    description: {
        type: {},
        required: true,
        maxlength: 2000,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: "category",
        required: true,
    },
    quantity: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0,
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    shipping: {
        required: false,
        type: Boolean,
    },

}, { timestamps: true, versionKey: false });
const product = mongoose.model("Product", productSchema);
module.exports = product;