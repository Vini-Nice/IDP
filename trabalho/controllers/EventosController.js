import { listarEventos, obterEventoPorId, criarEvento, atualizarEvento, excluirEvento } from '../models/Eventos.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listarEventosController = async (req, res) => {
    try {
        const eventos = await listarEventos();
        console.log('Eventos retornadas do banco:', eventos);
        res.status(200).json(eventos);
    } catch (err) {
        console.error('Erro ao listar eventos.');
        res.status(500).json({ mensagem: 'Erro ao listar eventos.' });
    }
};

const obterEventoPorIdController = async (req, res) => {
    try {
        const eventos = await obterEventoPorId();
        console.log('Evento retornada do banco:', eventos);
        if (eventos) {
            res.status(200).json(eventos);
        } else {
            res.status(404).json({ mensagem: 'Evento não encontrado.' });
        }
    } catch (err) {
        console.error('Erro ao listar eventos.');
        res.status(500).json({ mensagem: 'Erro ao obter evento por ID:', err });
    }
};

const criarEventoController = async (req, res) => {
    try {
        const { titulo, texto, imagem, data } = req.body;
        let imagemPath = null;

        if(req.file) {
            imagemPath = req.file.filename;

            console.log('Arquivo recebido:', req.file);
            console.log('Nome do arquivo:', imagemPath);
            console.log('Caminho completo:', path.join(__dirname, '../imgEventos', imagemPath));

            const eventoData = {
                titulo,
                texto,
                imagem: imagemPath,
                data
            };

            console.log('Dados do evento a ser criada:', eventoData);
            const eventoId = await criarEvento(eventoData);
            res.status(201).json({ mensagem: 'Evento criado com sucesso', eventoId, evento: eventoData });
        }
    } catch (err) {
        console.error('Erro ao criar a evento: ', err);
        res.status(500).json({ mensagem: 'Erro ao criar evento', erro: err.message });
    }
};

const atualizarEventoController = async (req, res) => {
    try {
        const eventoId = req.params.id;
        const { id_Eventos, titulo, texto, imagem, data } = req.body;
        let imagemPath = null;

        if (req.file) {
            imagemPath = req.file.filename;
        }

        const eventoData = {
            id_Eventos,
            titulo,
            texto, 
            imagem: imagemPath,
            data
        };

        await atualizarEvento(eventoId, eventoData);
        res.status(201).json({ mensagem: 'Evento atualizado com sucesso.' });
    } catch (err) {
        console.error('Erro ao atualizar evento: ', err);
        res.status(500).json({ mensagem: 'Erro ao atualizar evento.' });
    }
};

const excluirEventoController = async (req, res) => {
    try {
        const eventoId = req.params.id;
        await excluirEvento(eventoId);
        res.status(200).json({ mensagem: 'Evento excluido com sucesso.' });
    } catch (err) {
        console.error('Erro ao excluir evento:', err);
        res.status(500).json({ mensagem: 'Erro ao excluir evento.' });
    }
};

export { listarEventosController, obterEventoPorIdController, criarEventoController, atualizarEventoController, excluirEventoController };