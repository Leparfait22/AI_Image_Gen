import { models, Schema , model } from "mongoose";

const UserShema = new Schema({
   clerkId : {type : String , required : true, unique : true},
   email : {type : String , required : true, unique : true},
   username : {type : String , required : true, unique : true},
   photo : {type : String , required : true},
   firstName : {type : String },
   lastName : {type : String },
   planId : {type : Number , default : 1},
   creditBalance : {type : Number , default : 10},
})

const User = models?.Userr || model('User' , UserShema);

export default User ;
