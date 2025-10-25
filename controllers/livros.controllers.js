const { LivrosModel } = require("../models/livros");

const livrosController = {
    listarLivros: async (req, res) => {
        try {
            const livros = await LivrosModel.ListarTodos();
            res.status(200).json(livros);
        } catch (error) {
            console.error('Erro ao listar livros:', error);
            res.status(500).json({ error: 'Erro ao listar livros' });
        }
    },

    criarLivro: async (req, res) => {
        try {
            const { titulo, ano, quantidade } = req.body;
            await LivrosModel.criarLivro(titulo, ano, quantidade);
            res.status(201).json({ message: 'Livro criado com sucesso' });
        } catch (error) {
            console.error('Erro ao criar livro:', error);
            res.status(500).json({ error: 'Erro ao criar livro' });
        }
    }
};

module.exports = { livrosController };
