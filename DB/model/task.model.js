import { Schema,model,Types } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,required:true
    },
    description:{type:String
},
deadline:Date,
status:{type:String,enum:['toDo','doning','done']},
assignTo:{type:Types.ObjectId,ref:'user',required:true} ,
userID:{type:Types.ObjectId,ref:'user',required:true}
},
{
    timestamps:true
})

const taskModel=model('task',taskSchema)
export default taskModel