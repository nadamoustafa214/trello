
import userModel from '../../../DB/model/user.model.js';
import { asyncHandler } from '../../utils/errorHandling.js';
// import bcrypt from 'bcrypt';


//3
export const changePassword = asyncHandler(async(req,res,next)=>{
   
   const user=await userModel.findById(req.user._id)
   const oldPasswordCorrect= bcrypt.compareSync(req.body.oldPasword, user.password)
      if(!oldPasswordCorrect){
         return next(new Error({message:"Invalid old passwored!"}))

      }
      const newPasswordHashed = bcrypt.hashSync(req.body.newPassword,8);
      user.password=newPasswordHashed;
     await user.save();
   //const user=  userModel.updateOne({password:Password,id:_id})
   return res.json({message:"password updated",user})
}) 

//4

export const updateUser=asyncHandler(async(req,res,next)=>{

   const user=  await userModel.findById(req.user._id)
   if(req.body.age){
      user.age=req.body.age
   }
   if(req.body.firstName){
      user.firstName=req.body.firstName
   }
   if(req.body.lastName){
      user.lastName=req.body.lastName
   }

   await user.save()
    return res.json({message:'updated',user})
}
)

//5 delete user(user must be logged in)

export const deleteUser=asyncHandler(async(req,res,next)=>{
   const user= await userModel.findOneAndDelete(req.user._id)
      user.isDeleted=true
   return res.json({message:"deleted",user})
})

//6 soft delete(user must be logged in)
//!!!

export const softDelete=asyncHandler(async(req,res,next)=>{
   const user=await userModel.findById(req.user._id)
   user.deleteAt=new Date()
   return res.json({message:"DN"})
})

//7 logout !!!

// export const logout=asyncHandler((req,res,next)=>{
//    const user=req.user
   
// })






