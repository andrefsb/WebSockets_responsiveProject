import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb://127.0.0.1:27017");

let documentosColecao;

try{
    await cliente.connect();

    const db = cliente.db("documentos");
    documentosColecao = db.collection("documentos");

    console.log("Connected with database.")

}catch(erro){
    console.log(erro);
}

export { documentosColecao };