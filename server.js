const app = require('./src/config/custom-express');
const port = 3000;

app.listen(port, () => {
  console.log(`Server is working on port 3000`);
});

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
    res.send(`
          <html>
              <head>
                  <meta charset='utf-8'>
              </head>
              <body>
                  <h1>Livros</h1>
              </body>
          </html>
      `);
  });