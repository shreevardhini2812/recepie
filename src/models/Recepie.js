import mongoose from "mongoose";

const recepieSchema = new mongoose.Schema({
    menucode: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        
    },
    ingredients: {
        type: String,
        default: null,

    },
    price: {
        type: Number,
        default: null,

    },
    cuisine: {
        type: String,
        enum: ['Indian', 'Thai', 'Chinese'],
    },

});

const Recepie = mongoose.model("Recepie", recepieSchema);
export default Recepie;