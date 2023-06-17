import io from "./servidor.js";

io.on("connection", (socket) =>{
    console.log("A client just connected. ID:", socket.id)

    socket.on("texto_editor", (texto)=> {
        console.log(texto)
    })
  } );