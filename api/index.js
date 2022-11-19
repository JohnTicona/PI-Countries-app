const server = require('./src/app');
const { db } = require('./src/db');
require('dotenv').config();

const { PORT } = process.env;

db.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(`Server on port ${PORT}`);
  });
});
