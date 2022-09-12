var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/chatnode");

const userSchema=mongoose.Schema({
chat:String,
username:String,
password:String
})

module.exports=mongoose.model("user",userSchema);