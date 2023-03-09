const express = require('express');
const router = express.Router();

const { UserModel } = require('./models')

// Definindo a rota raiz
router.get('/', (req, res) => {
  res.send('Servidor rodando com Sequelize!');
});

// Busca todos os usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (err) {
    console.error('Erro ao obter usuários:', err);
    res.status(500).json({ message: 'Erro ao obter usuários' });
  }
});

// Adiciona um usuario
router.post('/adduser', async (req, res) => {

  try {
    const { name, email, age } = req.body;

    const user = await UserModel.create({
      name,
      email,
      age
    });

    console.log({ name, email, age });

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao inserir o usuário no banco de dados' });
  }
});

// Busca um usuario por ID
router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByPk(id);

    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar o usuário' });
  }
});

// Atualiza um usuário por ID
router.put('/updateuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const user = await UserModel.findByPk(id);

    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    user.name = name;
    user.email = email;
    user.age = age;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao atualizar o usuário' });
  }
});

// Deleta um usuario por ID
router.delete('/deleteuser/:id', async (req, res) => {

  console.log(req.params.id);
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ erro: 'Usuário não encontrado' });
    } else {
      await user.destroy();
      res.status(200).json({ message: `Usuario ${user.name} deletado`})
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir o usuário no banco de dados' });
  }
});

module.exports = router;