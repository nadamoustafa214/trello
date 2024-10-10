
import connectDB from '../DB/connectDB.js'
import userRouter from './modules/users/user.router.js'
import authRouter from './modules/auth/auth.router.js'
import {globalErrorHandlling} from './utils/errorHandling.js'
import taskRouter from './modules/tasks/task.router.js'

const bootstrap=(app,express)=>{

    app.use(express.json())
    app.use('/user',userRouter)
    app.use('/auth',authRouter)
    app.use('*',(req,res,next)=>{
      return  res.json({message:"in-valed routing"});
    })
    app.use('/task',taskRouter)
    
    
    
    
    app.use(globalErrorHandlling)
    
    connectDB()

  }

export default bootstrap 