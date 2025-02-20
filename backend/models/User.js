import mongoose from 'mongoose';
const userSchema =new  mongoose.Schema({
name:{
    type:String,
    required:true,
    minLength:5
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true,
    minLength:8
}
},
{
    timestamps:true
});

const User = mongoose.model("User",userSchema);
export default User;