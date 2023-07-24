// imporantndo o módulo de configuração contido na pasta
// config/database.js
import { Sequelize } from 'sequelize';

// importando o objeto com as configurações de conexão
import databaseConfig from '../config/database';

import associate from '../models/associations';

// models
import Group from '../models/Group';
import User from '../models/User';
import Profile from '../models/Profile';
import Foto from '../models/Foto';
import Person from '../models/Person';
import Contact from '../models/Contact';
import Task from '../models/Task';

export default (sync) => {
  try {
    // criando uma conexão com a base de dados
    const conn = new Sequelize(databaseConfig);

    // criando um array com os alunos para executar o init de todos em um looping
    const models = [Group, User, Profile, Foto, Person, Contact, Task];

    // percorrendo o array de models e executando o método init de cada model
    models.forEach((model) => model.init(conn));

    associate();

    if (sync) {
      conn.sync({ force: true });
    } else {
      conn.sync({ force: false });
    }

    // se erro
  } catch (e) {
    console.log(e);
  }
};
