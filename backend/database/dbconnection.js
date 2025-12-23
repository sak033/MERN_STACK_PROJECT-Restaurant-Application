import mongoose from "mongoose";

const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"mern_project"
}).then(()=>{
    console.log("Connected to database Successfully");
}).catch(err=>{
    console.log(`some error occured in db connection ${err}`);
});
}

export default dbConnection;