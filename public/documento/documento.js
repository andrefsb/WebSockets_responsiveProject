import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");

const textoEditor = document.getElementById("editor-texto");
tituloDocumento.textContent = nomeDocumento || "Documento sem título";
const botaoExcluir = document.getElementById("excluir-documento");

function tratarAutorizacaoSucesso(payloadToken){
  selecionarDocumento({nomeDocumento, nomeUsuario: payloadToken.nomeUsuario});
};

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
      texto:  textoEditor.value, 
      nomeDocumento,
    })
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(nomeDocumento);
})

function alertarERedirecionar(nome){
  if(nome === nomeDocumento){
    alert(`Document ${nome} deleted.`);
    window.location.href= "/";
  }
}

export{ atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso };