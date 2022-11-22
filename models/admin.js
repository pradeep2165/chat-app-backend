import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String, required:true},
  createdAt:{
    type:Date,
    defalut: new Date(),
  },
});

export default mongoose.model("Admin", AdminSchema);
