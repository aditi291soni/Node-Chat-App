const io = require("socket.io")();
const socketapi = {
  io: io,
};


//user disconnected
io.on("connection", (socket) => { //sare user k liye
  console.log("a user connected");
  socket.on("message",(data)=>{//single user ko data show hoga
  console.log(data);
    socket.broadcast.emit("datamilgya", data);//user ko chod kar sabko data mila
    console.log(data);
    
  })
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
module.exports = socketapi;
