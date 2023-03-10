# Projeto de exemplo SQL
Esse projeto tem a finalidade de ser um exemplo de como criar um servidor backend conectado a um banco de dados SQL que sirvar uma Rest API e um exemplo de aplicação frontend consumindo essa api com a função `fetch()` nativa do JavaScript.

## Funcionamento
### Backend
O Servidor é levantado com a popular `Express.js` e faz a conexão com o banco de dados usando `Sequelize` para fazer as operações SQL.

### Frontend
O app é um Single Page Application criado com ReactJS com elementos separados que importam serviços de requisição API que consomem cada roda de acordo com sua operação usando a API nativa `fetch()` do navegador.