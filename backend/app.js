const express = require('express');
const cors = require('cors');
const { setupRoutes } = require('./routes');
const { port } = require('./conf');

const app = express();

app.use(express.json());
app.use(cors());
setupRoutes(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
