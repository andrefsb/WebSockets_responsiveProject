import io from "./servidor.js";

io.on("connection", (socket) =>{
    console.log("A client just connected. ID:", socket.id)
  } );