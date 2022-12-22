import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
    name:{
        type: String,
        required:[true,'Select district'],
        unique:true
    }
},
{ timestamps: true }
);

export default mongoose.model('Location',locationSchema);