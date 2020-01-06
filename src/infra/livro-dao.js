class LivroDao {
  constructor(db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.all("select * from livros", (error, result) => {
        if (error) return reject("Error on getting books from database.");

        return resolve(result);
      });
    });
  }

  save(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
        INSERT INTO LIVROS (
                titulo,
                preco,
                descricao
            ) values (?, ?, ?)
        `,
        [livro.titulo, livro.preco, livro.descricao],
        error => {
          if (error) {
              console.log(error);
            return reject("An error occurred when saving the book.");
          }
          
          resolve();
        }
      );
    });
  }
}

module.exports = LivroDao;
