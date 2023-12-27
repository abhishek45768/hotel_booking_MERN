import mongoose from "mongoose";
const Userschema=new mongoose.Schema(
    {
        email:{type:String,required:true, unique:true},
        password:{type:String,required:true},
        Name:{type:String,required:true},
        phone:{type:Number},
        gender:{type:String,enum:["male","female"]}
});
export default mongoose.model("User",Userschema);