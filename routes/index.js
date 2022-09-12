var express = require('express');
var router = express.Router();
const userModel=require('./users')
var socketio = require("socket.io");


/* GET home page. */
router.get("/",function(req,res){
  res.render("index",);
})

router.post('/chat',  function(req, res, next) {
  userModel.create({
    username:req.body.username,
    password:req.body.password
  })
  .then((username)=>{
    console.log(username);
    res.render("chats",{username})
  })
});

module.exports = router;
