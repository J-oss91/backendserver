import mongoose from "mongoose";

export default async function connect (){
   await mongoose.connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   console.log("Database Connected");
}
