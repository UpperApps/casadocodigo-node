const LivroDao = require("../../infra/livro-dao");
const db = require("../../config/database");

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
    const livroDao = new LivroDao(db);

    livroDao
      .list()
      .then(livros =>
        res.marko(require("../views/livros/listagem/listagem.marko"), {
          livros: livros
        })
      )
      .catch(error => console.log(error));
  });

  app.get("/livros/form", (req, res) => {
    res.marko(require("../views/livros/form/form.marko"));
  });

  app.post("/livros", (req, res) => {
    const livroDao = new LivroDao(db);

    livroDao
      .save(req.body)
      .then(res.redirect('/livros'))
      .catch(error => console.log(error));
  });

};
