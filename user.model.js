import mongoose from "mongoose";
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    empId:{type:String},
    phone:{type:String},
    designation:{type:String},
    salary:{type:String},
    address:{type:String},
    experience:{type:String},
    photo:{type:String},
})

export default mongoose.model.Tasks||mongoose.model("task",schema)
