import { listarAvisos, obterAvisosPorId, criarAvisos, atualizarAvisos, excluirAvisos } from '../models/Avisos.js';

const listarAvisosConstroller = async (req, res) => {
    try {
        const avisos = await listarAvisos();
        console.log('Avisos retornados no banco:', avisos);
        res.status(200).json(avisos);
    } catch (err) {
        console.log('Erro ao listar os avisos:', err);
        res.status(500).json({ mernsagem: 'Erro ao listar avisos.' });
    }
};

const obterAvisosPorIdController = async (req, res) => {
    try {
        const avisos = await obterAvisosPorId();
        console.log('Avisos retornada do banco:', avisos);
        if(avisos) {
            res.status(200).json(avisos);
        } else {
            res.status(404).json({ mensagem: 'Avisos não encontrado.' });
        }
    } catch (err) {
        console.log('Erro ao obter os aviso por ID:', err);
        res.status(500).json({ mernsagem: 'Erro ao obter aviso por ID.' });
    }
};

const criarAvisoController = async(req, res) => {
    try {
        const { titulo, descricao, data } = req.body;
        const avisoData = {
            titulo,
            descricao,
            data
        };

        console.log('Dados do aviso a ser criada:', avisoData);
        const avisoId = await criarEvento(eventoData);
        res.status(201).json({ mensagem: 'Aviso criado com sucesso', avisoId, aviso: avisoData });
    } catch (err) {
        console.error('Erro ao criar a aviso: ', err);
        res.status(500).json({ mensagem: 'Erro ao criar aviso', erro: err.message });
    }
}

const atualizarAvisoController = async (req, res) => {
    try {
        const avisoId = req.params.id;
        const { id_Avisos, titulo, descricao, data } = req.body;

        const avisoData = {
            id_Avisos,
            titulo,
            descricao,
            data
        };

        await atualizarAviso(avisoId, avisoData);
        res.status(201).json({ mensagem: 'Aviso atualizado com sucesso.' });
    } catch (err) {
        console.error('Erro ao atualizar aviso:', err);
        res.status(500).json({ mensagem: 'Erro ao atualizar aviso.' });
    }
};

const excluirAvisoController = async (req, res) => {
    try {
        const avisoId = req.params.id;
        await excluirAviso(avisoId);
        res.status(200).json({ mensagem: 'Aviso excluido com sucesso.' });
    } catch (err) {
        console.error('Erro ao excluir evento:', err);
        res.status(500).json({ mensagem: 'Erro ao excluir evento.' });
    }
};

export { listarAvisosConstroller, obterAvisosPorIdController, criarAvisoController, atualizarAvisoController, excluirAvisoController };