import {Router} from "express";
import { createRecipe, deleteRecepie, getAllRecepies, getRecipeById, updateRecepie } from "../controllers/recepieController.js";
import { verifyid } from "../middlewares/recepieMiddleware.js";

const userRouter = Router();

userRouter.use((req,res,next)=>{
    console.log("Middleware router");
    next();
});


userRouter.post("/",createRecipe);

userRouter.get("/",getAllRecepies);

userRouter.get("/:id", verifyid, getRecipeById);

userRouter.patch("/:id", verifyid, updateRecepie);

userRouter.delete("/:id", verifyid, deleteRecepie);


export default userRouter;