const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  const message = process.env.MESSAGE || "hello from localhost"
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
