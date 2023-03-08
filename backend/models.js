const { Sequelize } = require('sequelize');

// Criando a conexão com o banco de dados
const conn = new Sequelize('meu_db_aula', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definindo um modelo para a tabela "users_table"
const UserModel = conn.define('users_table', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

// Sincronizando o modelo com o banco de dados
conn.sync({ alter: true })
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o modelo com o banco de dados:', err);
  });

module.exports = {
  UserModel, conn
};
