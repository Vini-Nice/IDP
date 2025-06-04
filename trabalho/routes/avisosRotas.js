import express from 'express';
import { listarNoticiasController, obterNoticiaPorIdController, criarNoticiaController, atualizarNoticiaController, excluirNoticiaController } from '../controllers/NoticiasController';
import { fileURLToPath } from 'url';

const router = express.Router();

router.get('/', listarNoticiasController)
