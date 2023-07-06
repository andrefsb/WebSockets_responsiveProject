const socket = io();

function emitirCadastrarUsuario(dados){
    Socketket.emit("cadastrar_usuario", dados);
}

export { emitirCadastrarUsuario } 