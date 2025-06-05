import express from 'express';
import { listarAvisosController, obterAvisoPorIdController, criarAvisoController, atualizarAvisoController, excluirAvisoController } from '../controllers/AvisosController.js';

const router = express.Router();

// Listar todos os avisos
router.get('/', listarAvisosController);

// Obter um aviso específico
router.get('/:id', obterAvisoPorIdController);

// Criar um novo aviso
router.post('/', criarAvisoController);

// Atualizar um aviso
router.put('/:id', atualizarAvisoController);

// Excluir um aviso
router.delete('/:id', excluirAvisoController);

export default router;
