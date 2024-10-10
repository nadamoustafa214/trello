import userModel from "../../../../DB/model/user.model.js"
import bcrypt from 'bcrypt';
import { asyncHandler } from "../../../utils/errorHandling.js"
import  Jwt  from "jsonwebtoken"

//1 signUp
export const signup= asyncHandler( async(req,res,next)=>{
    const{userName,email,phone,age,gender,passwordHashed,password}=req.body
    //console.log({userName,email,phone,age,gender,passwordHashed});

    const userCheck= await userModel.findOne({email})
    if(userCheck){
        return next(new Error("email exist ",{cause:409 }))
    }
    const hashPassword=bcrypt.hashSync(password,10)
    const user=await userModel.create({userName,email,phone,age,gender,password:hashPassword,passwordHashed})
    return res.status(201).json({message:"DN",user})
})
//2 login (with create token )
export const login =asyncHandler( async(req,res,next)=>{
    const{email,password}=req.body

    const user= await userModel.findOne({email})
    if(!user){
        return next(new Error("email  not exist "))
    }
    console.log({FP:password,BP:user.password});
    const check =bcrypt.compareSync(password,user.password)
    if(!check){
        return next(new Error("invalid data"))
    }
    const token=Jwt.sign(
        {userName:user.userName,id:user._id },
        "itsme<3",{expiresIn:60}
    )
   return  res.status(200).json({message:"done",token})
    
} )  
 