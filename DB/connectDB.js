import mongoose from 'mongoose'




 const connectDB= async()=>{
    return await mongoose.connect('mongodb://localhost:27017/assigment7Trello').then(res=>{
        console.log("DB connected");
    }).catch(err=>{
        console.log("Catch error in DB connecting",err);
    }) ;
 }

 export default connectDB