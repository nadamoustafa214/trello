
 export const asyncHandler =(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(error=>{
            return next (new Error (error))

        })
    }
}

export const globalErrorHandlling=(error,req,res,next)=>{
    return res.json({message:"global error",mgError:error.message,stack:error.stack})
  } 