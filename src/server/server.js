import express from 'express';
import path from 'path';

export const startServer = (options) => {
  const { port, public_path = 'public' } = options;
  const app = express();

  // Para poder usar un middleware se usa la palabra reservada use (express)
  app.use(express.static(public_path)); // contenido estatico disponible para su uso

  app.get('*', (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
};

/* module.exports = {
  startServer,
};
 */