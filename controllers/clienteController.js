const { ClienteModel } = require("../models/clienteModel");

const clienteController = {
    listarCliente: async (req, res) => {
     try {
          const cliente = await ClienteModel.listarTodos();
          res.status(200).json(cliente);
     } catch (error) {
        console.error('Erro ao listar clientes:', error);
        res.status(500).json({ error: 'Erro ao listar cliente'});
     }
},

criarCliente: async (req, res) => {
    try {
        const { nome, email, telefone} = req.body;
        await ClienteModel.criarCliente(nome, email, telefone);
        res.status(201).json({ message: 'Cliente criado com sucesso!'});
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ error: 'Erro ao criar cliente'});

    
    }
  }
};

module.exports = {clienteController};