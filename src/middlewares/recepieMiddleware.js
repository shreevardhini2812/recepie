import mongoose from "mongoose";

export const verifyid = (req, res, next) => {
    const {id} = req.params;

    if(mongoose.Types.ObjectId.isValid(id)===false){
        return res.status(400).json({
            status: "error",
            message: "Invalid ID",
        });
    }
    next();
}