const app = require('./src/config/custom-express');
const port = 3000;

app.listen(port, () => {
  console.log(`Server is working on port 3000`);
});