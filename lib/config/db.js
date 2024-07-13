import mongoose from "mongoose";

export const connectDB  = async() =>{
    await mongoose.connect('mongodb+srv://aakashpodar234:aakash230824@cluster0.ejqveh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    console.log('DB Connected');
}
