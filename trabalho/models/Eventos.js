import { create, readAll, read, update, deleteRecord } from '../config/db.js';

const listarEventos = async () => {
    try {
        return await readAll('Eventos');
    } catch (err) {
        console.error('Erro ao listar eventos:', err);
        throw err;
    }
};

const obterEventoPorId = async (id) => {
    try {
        return await read('Eventos', `id_Eventos = ${id}`);
    } catch (err) {
        console.error('Erro ao obter eventos por id:', err);
        throw err
    }
};

const criarEvento = async (eventoData) => {
    try {
        return await create('Eventos', eventoData);
    } catch (err) {
        console.error('Erro ao criar evento:', err);
        throw err;
    }
};

const atualizarEvento = async (id, eventoData) => {
    try {
        await update('Eventos', eventoData, `id_Eventos = ${id}`);
    } catch (err) {
        console.error('Erro ao atualizar eventos:', err);
        throw err;
    }
};

const excluirEvento = async (id) => {
    try {
        await deleteRecord('Eventos', `id_Eventos = ${id}`);
    } catch (err) {
        console.error('Erro ao excluir evento:', err);
        throw err;
    }
};

export { listarEventos, obterEventoPorId, criarEvento, atualizarEvento, excluirEvento };