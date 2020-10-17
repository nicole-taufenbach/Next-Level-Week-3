//importar dependencias
const express = require("express");
const path = require("path"); //prevenir de erros de diretório
const pages = require("./pages.js");

//iniciando o express
const server = express();

//configuração do server
server
  .use(express.urlencoded({ extended: true }))
  //utilizar body do req
  .use(express.static("public")) //utilizando os arquivos estáticos
  .set("views", path.join(__dirname, "views")) //configurar template de engine
  .set("view engine", "hbs");

// criar uma rota
server
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);
//ligar o servidor
server.listen(5500, () => {
  console.log("Server started");
});
