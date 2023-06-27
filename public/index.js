import "./socket-front-index.js"

const listDocumentos = document.getElementById("lista-documentos");

function inserirLinkDocumento(nomeDocumento){
    listDocumentos.innerHTML += `
    <a 
    href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
        ${nomeDocumento}
    </a>
    `
}

export { inserirLinkDocumento };