const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const options = { noCors: true };
const middlewares = jsonServer.defaults(options);
// If port is set in as the env variable use it, otherwise fallback to 5001
const PORT = process.env.PORT || 5001;

server.use(middlewares);
server.use(morgan("dev"));
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
