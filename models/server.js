const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.indexPath = '/';

    //Connect to DB
    this.dbConnection();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  async dbConnection() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors({ origin: 'https://cse341-contacts-frontend.netlify.app/' }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.indexPath, require('../routes/index'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}!`);
      console.log(`See the documentation at http://localhost:${this.port}/api-docs/ 🚀`);
    });
  }
}

module.exports = Server;
