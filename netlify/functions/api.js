// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 2345; // <== You can change the port

// server.use(middlewares);
// server.use(router);

// server.listen(port);
// netlify/functions/api.js

const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "http://localhost:3001"; // Change this to your JSON server URL

  try {
    const response = await fetch(`${url}${event.path}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
