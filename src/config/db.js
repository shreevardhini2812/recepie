import mongoose from "mongoose";

const mongodbURI = 
"mongodb+srv://shreevardhini28122000_db_user:9HP9LvBKjaKIWHfB@cluster1.5r84mjp.mongodb.net/Recepie?retryWrites=true&w=majority&appName=Cluster1"

const connectDB = () => {
    mongoose.connect(mongodbURI).then(()=>{
        console.log("Connected to MongoDB database");
    }).catch((error=>{
        console.log("Connection error: ",error);
    }));
    
};

export default connectDB;