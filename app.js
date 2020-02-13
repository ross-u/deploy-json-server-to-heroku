const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const options = { noCors: true }; // Disables CORS
const middlewares = jsonServer.defaults(options);
const PORT = process.env.PORT;

server.use(middlewares);
server.use(morgan("dev"));
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
