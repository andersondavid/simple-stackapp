const express = require('express');
const router = express.Router();

const { Usuario } = require('./models')

// Definindo a rota raiz
router.get('/', (req, res) => {
  res.send('Servidor rodando com Sequelize!');
});

router.get('/users', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao obter usuários:', err);
    res.status(500).json({ message: 'Erro ao obter usuários' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const { nome, email, idade } = req.body;

    const usuario = await Usuario.create({
      nome,
      email,
      idade
    });

    res.status(201).json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao inserir o usuário no banco de dados' });
  }
});

module.exports = router;