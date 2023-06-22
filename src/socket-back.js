import io from "./servidor.js";

io.on("connection", (socket) =>{
    console.log("A client just connected. ID:", socket.id)

    socket.on("selecionar_documento", (nomeDocumento) =>{
        socket.join(nomeDocumento);
    })

    socket.on("texto_editor", ({ texto, nomeDocumento })=> {
        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    })

  });