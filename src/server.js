const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");

const User = require("./models/User");

const app = express();
// modelo da API JSON
app.use(express.json());
app.use("/api", router);
// REQ -> Requisição
// RES -> Response
app.get("/healthcheck", (req, res) => {
  // 200 -> Ok
  return res.status(200).json({
    msg: "Estamos vivos!",
    alive: true,
  });
});
// Atom One Dark => Theme
// listen -> ouvir ( 8080 )
sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelicida com sucesso");
    await sequelize.sync();
  })
  .then(() => {
    app.listen(8080, () => {
      console.log("#####################");
      console.log("Rodando na porta 8080");
      console.log("#####################");
    });
  })
  .catch((error) => {
    console.error("Erro ao se conectar com o banco:", error);
  });

/* 
.then
.catch
try {
} catch
*/
