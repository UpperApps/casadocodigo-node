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
    res.marko(
            require("../views/livros/listagem/listagem.marko"),
            {
                livros: [
                    {
                        id: 1,
                        title: 'Node basics'
                    },
                    {
                        id: 2,
                        title: 'Advanced Node'
                    }
                ]
            }
        );
  });
};
