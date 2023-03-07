const { Sequelize } = require('sequelize');

const conn = new Sequelize('meu_db_aula', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definindo um modelo para a tabela "usuarios"
const Usuario = conn.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  }
});

// Sincronizando o modelo com o banco de dados
conn.sync()
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o modelo com o banco de dados:', err);
  });

module.exports = {
  Usuario, conn
};
