import mongoose from "mongoose";
 
const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    }  ,
    date:{
        type:Date,
        default : Date.now()
    } 
})

// create the email model and collection
const EmailModel = mongoose.models.email ||  mongoose.model('email' , Schema);

export default EmailModel;
