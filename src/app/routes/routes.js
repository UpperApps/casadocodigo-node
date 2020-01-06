const db = require('../../config/database');

module.exports = app => {
  app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset='utf-8'>
            </head>
            <body>
                <h1>Casa do Código</h1>
                <h2>Home Page</h2>
            </body>
        </html>
    `);
  });

  app.get("/livros", (req, res) => {

    db.all('select * from livros', (error, result) => {
        res.marko(
            require("../views/livros/listagem/listagem.marko"),
            {
                livros: result
            }
        );
    });
  });
};
