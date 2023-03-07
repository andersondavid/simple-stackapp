const express = require('express');
const { conn } = require('./models');
const router = require('./router');
const cors = require('cors');

// Testando a conexão com o banco de dados
conn.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use('/', router)  
app.use('/users', router)



// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
