class LivroDao {
  constructor(db) {
    this._db = db;
  }

  list(callback) {
    this._db.all("select * from livros", (error, result) => {
      callback(error, result);
    });
  }
}

module.exports = LivroDao;