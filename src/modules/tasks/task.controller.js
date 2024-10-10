import { asyncHandler } from "../../utils/errorHandling";
import taskModel from "../../../DB/model/task.model";
import userModel from "../../../DB/model/user.model";

//1
export const addTask=asyncHandler(async(req,res,next)=>{

    const add= new Data();

    const user=req.user

    const {title,descripion,deadline,assignTo}=req.body;

    const freelancer=  await userModel.findById(assignTo)

    if(!freelancer){
        return next(new Error("user not exist"))
    }

    const task=  await taskModel.create({title,descripion,deadline,assignTo,userId:user.id})

    return res.json({message:"done",task})
})

//2

export const updateTask=asyncHandler(async(req,res,next)=>{
    const {taskId}=req.headers
    const {title,descripion,status}=req.body
    const task= await taskModel.findById(taskId)
    if(!task){
        return next(new Error("errrorr task"))

    }else if(task.userId !== user.id){
        return next (new Error("cant update task"))
    }
    if(status){
        task.status=status
    }
    if(title){
        task.title=title
    }
    if(descripion){
        task.descripion=descripion
    }
    return res.json({message:"DN",task})
})

//3

export const deleteTask=asyncHandler(async(req,res,next)=>{
    const {taskId}=req.headers
    //console.log({taskId});
    const task =  await taskModel.findByIdAndDelete(taskId)
    if(task.userId!== userId){  //!!!!!
        return next(new Error("cant delete"))
    }
if(!task){
    return next (new Error("errorrr task"))
}
return res.json({message:'done',task})
})

//4
export const getAllTasks = asyncHandler(async (req, res,next) => {
    const task = await taskModel.find().populate([{ path: "userId", select: "userName email"},
        { path: "assignTo", select: 'userName email' }])
     return  res.json({ message :'Done',task});
}
)

//5 !!!
export const getTasks=asyncHandler(async(req,res,next)=>{
    const task=await taskModel.find({userId: user.id}).populate
    ([{path:"userId",select:"userName email"},{path:"assignTo",select:"userName email"}])

return res.json({message:"Dn",task})
})
//6 !! nfsha?





//7
export const tasksNotDone=asyncHandler(async(req,res,next)=>{
    const task = await taskModel.find({userId: user.id ,
        status: { $ne: 'done' },
     deadline: { $lt: new Date() }}).populate
     ([{ path:"userId", select:"userName email"},{path:"assignTo",select:"userName email"}])
        return  res.json({ message :'Dn',task});
})




