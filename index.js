const app = require("./api/server");

const { port } = require("./config");

app.listen(port, () => console.log(`*** Server listening on port ${port} ***`));
