import Recepie from "../models/Recepie.js";


///create recepies
export const createRecipe = async (req, res) => {
    const {menucode, name, ingredients, price, cuisine} = req.body;

    const newRecepie = new Recepie({
        menucode,
        name,
        ingredients,
        price,
        cuisine,
    });

    await newRecepie.save();
    // recepies.push(newRecepie);
    // console.log(recepies);
    res.status(201).json({
        status: "Success",
        message: "User created successfully",
        data: newRecepie,
    });
}

///get all recepies
export const getAllRecepies = async (req, res) => {
    const recepies = await Recepie.find().select("-__v");
    res.status(200).json({
        status:"success",
        message:"User fetched successfully",
        data: recepies,
    });
}


//get recepie by ID
export const getRecipeById = async (req, res) => {
    const {id} = req.params;

    const rec = await Recepie.findById(id).select("-__v").lean();
    if(!rec){
        res.status(404).json({
            status: "error",
            message: "user not found",
        });
    }
    res.status(200).json({
        status: "success",
        message: "user fetched successfully",
        data: rec,
    });
}


//update recepie by ID
export const updateRecepie = async (req, res) => {
    const {id} = req.params;
    const newData = req.body;

    const rec = await Recepie.findByIdAndUpdate(id, newData, {new:true, runValidators: true});
    
        res.status(200).json({
        status:"success",
        message:"User updated successfully",
        data: rec,
    });
} ;


//delete recepie by ID
export const deleteRecepie = async (req, res) => {

    const {id} = req.params;

    const rec = await Recepie.findByIdAndDelete(id);
    
    res.status(200).json({
        status: "success",
        message: "User deleted successfully",
        data: rec,
    });

    
};