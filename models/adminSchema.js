const mongoose =require('mongoose')

const adminSchema= mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{
        type:String,
        default:"admin"
    },
},
{timestamps: true})
const Admin = mongoose.model("Admin",adminSchema)
module.exports=Admin