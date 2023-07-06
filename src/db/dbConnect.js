import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb://127.0.0.1:27017");

let documentosColecao, usuariosColecao;

try{
    await cliente.connect();

    const db = cliente.db("documentos");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log("Connected with database.")

}catch(erro){
    console.log(erro);
}

export { documentosColecao, usuariosColecao };