const socket = io();

function emitirCadastrarUsuario(dados){
    socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", ()=>alert("New user created successfully!"));
socket.on("cadastro_erro", ()=>alert("Error creating new user!"));
socket.on("usuario_ja_existente", ()=>alert("User already exists!"));

export { emitirCadastrarUsuario } 