import { definirCookie } from "../utils/cookies.js";

const socket= io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt)=>{
    definirCookie("tokenJwt", tokenJwt);

    alert("User successfully authenticated.")
    window.location.href="/";
});
socket.on("autenticacao_erro", ()=>alert("Error authenticating user."));
socket.on("usuario_nao_encontrado", ()=>alert("User not found."));

export { emitirAutenticarUsuario };