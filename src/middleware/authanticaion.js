import Jwt from "jsonwebtoken"
import userModel from "../../DB/model/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";


export const auth=asyncHandler((req,res,next)=>{
    const{authorization}=req.headers
    console.log({authorization});
    if(!authorization){
        return next(new Error('authorizaion is required'))
     }

     const decoded= Jwt.verify(authorization,'itsme<3')
     console.log(decoded);
     if (!decoded?.id){
        return next(new Error('invalied token'))
     }
     const user =  userModel.findById(decoded.id)
     if(!user){
        return next(new Error("not have this user"))
     }
req.user=user;
     return next()
})