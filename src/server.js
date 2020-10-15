//importar dependencias
const express = require("express");
const path = require("path"); //prevenir de erros de diretório
const pages = require("./pages");

//iniciando o express
const server = express();

server
  .use(express.static("public")) //utilizando os arquivos estáticos
  .set("views", path.join(__dirname, "views")) //configurar template de engine
  .set("view engine", "hbs");

// criar um rota
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(5500, () => {
    console.log ('Server started')
})
