import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected");

    }catch(err){
        console.log("mongo err");
    }
}