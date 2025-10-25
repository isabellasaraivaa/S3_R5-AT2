const express = require("express");
const router = express.Router();
const { livrosController } = require("../controllers/livros.controllers");

router.get('/livros', livrosController.listarLivros);
router.post('/livros', livrosController.criarLivro);

module.exports = { livroRoutes: router };
