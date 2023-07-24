/**
 * Este módulo também faz uso do CommonJS
 *
 * Este arquivo contém as informações para conexão com a base de dados
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PWD,
  database: process.env.DATABASE,
  // configuração para campos created_at e updated_at automático quando
  // registro é alterado ou criado na tabela
  define: {
    timestamps: true,
    // essas duas linhas servem para que o sequelize converta nomes de camelCase para undercore
    // ex. createdAt para created_at
    underscored: true,
    underscoredAll: true,
    // informa que nome camelCase corresponde ao nome que foi passado como undercore
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: '-03:00',
  },
  timezone: '-03:00',
};
