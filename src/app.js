import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import corsConfig from './utils/corsConfig';
import database from './database';

// variáveis de ambiente
dotenv.config();

// App
class App {
  // construtor
  constructor() {
    this.app = new express();
    this.middlewares();
    this.routers();
    this.config();
  }

  // middlewaerea
  middlewares() {
    this.app.use(cors(corsConfig));
    this.app.use(helmet);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.resolve(__dirname, 'uploads')));
  }

  // routers
  routers() {

  }

  // configurações
  config() {
    // verifica se dev ou prod
    if (process.env.DEV === 'dev') {
      database(true);
    }
  }
}

// exportando
export default new App().app;
