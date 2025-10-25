const express = require('express');
const { livroRoutes } = require('./routes/livros.Routes'); // ajuste o caminho conforme seu projeto

const app = express();
const PORT = 3000;

app.use(express.json()); // para receber JSON no body das requisições

app.use('/', livroRoutes); // monta as rotas na raiz

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
