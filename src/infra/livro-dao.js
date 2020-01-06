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
}

module.exports = LivroDao;
