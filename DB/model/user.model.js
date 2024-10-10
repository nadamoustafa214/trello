import { Schema,model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,required:true
    },
    email:{type:String,required:true,unique:true,lowercase:true
},
age:Number,
gender:{type:String,enum:['male','female']},
phone:{type:String,unique:true},
passwordHashed:{type :String,required:true},
password:{type :String,required:true},
deleteAt:{type:Date},
isDeleted:{type:Boolean,default:false},
isDeleated: Boolean
},
{
    timestamps:true
})

const userModel=model('user',userSchema)
export default userModel