const { envs } = require('./config/env');
const { startServer } = require('./server/server');
const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  })
};

// Funcion agnostica autoconvocada y asincrona
// Agnostica: No tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
// Asincrona porque la ejecutamos con async
(async () => {
  main();
})();
