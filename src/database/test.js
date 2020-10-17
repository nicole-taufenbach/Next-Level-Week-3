const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
//   inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2114974",
    lng: "-49.6554793",
    name: "Lar dos Meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "55999992222",
    images: [
      "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  })
//   consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  //consultar somente um orfanato pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);
//   //remover um dado da tabela
//   console.log(await db.run('DELETE FROM orphanages WHERE id="8"'))
});
