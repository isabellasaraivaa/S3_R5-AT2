const express = require('express');
const { livroRoutes } = require('./routes/livros.Routes'); // ajuste o caminho conforme seu projeto
const { clienteRoutes } = require("./routes/clienteRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); // para receber JSON no body das requisições

app.use('api', livroRoutes); // monta as rotas na raiz
app.use('/api', clienteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
