import app from "./api/server.js";

import { port } from "./config/config.js";

app.listen(port, () => console.log(`*** Server listening on port ${port} ***`));
