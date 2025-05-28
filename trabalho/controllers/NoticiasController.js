import { listarNoticias, obterNoticiaPorId, criarNoticia, atualizarNoticia, excluirNoticia } from '../models/Noticias.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listarNoticiasController = async (req, res) => {
    try {
        const noticias = await listarNoticias();
        res.status(200).json(noticias);
    } catch (err) {
        console.error('Erro ao listar noticias: ', err);
        res.status(500).json({ mensagem: 'Erro ao listar noticias.' });
    }
};

const obterNoticiaPorIdController = async (req, res) => {
    try {
        const noticia = await obterNoticiaPorId(req.params.id);
        if (noticia) {
            res.status(200).json(noticia)
        } else {
            res.status(404).json({ mensagem: 'Noticia não encontrada.' })
        }
    } catch (err) {
        console.error('Erro ao obter noticia por ID: ', err);
        res.status(500).json({ mensagem: 'Erro ao obter noticia por ID' })
    }
};

const criarNoticiaController = async (req, res) => {
    try {
        const { titulo, descricao, data, imagem, usuario, categoria } = req.body;
        let imagemPath = null;
        // req requisita algo do servidor e file indica que essa requisição irá possuir um arquivo enviado pelo usuário.
        if (req.file) {
            // ele pega o caminho completo do arquivo enviado pelo usuário, le ele e encurta, para facilitar a vida do desenvolvedor.
            imagemPath = req.file.path.replace(__dirname.replace('\\constrollers', ''), '');
        }
        // requisição do conteudo enviado pelo criador da noticia
        const noticiaData = 
        {
            titulo,
            descricao,
            data,
            imagem: imagemPath, // use o valor extraído corretamente
            usuario,
            categoria
          };

        const noticiaId = await criarNoticia(noticiaData);
        res.status(201).json({ mensagem: 'Noticia criada com sucesso', noticiaId });
        console.log(noticiaData)
    } catch (err) {
        console.error('Erro ao criar a noticia: ', err);
        res.status(500).json({ mensagem: 'Erro ao criar noticia' });
    }
};

const atualizarNoticiaController = async (req, res) => {
    try {
        const noticiaId = req.params.id;
        const { id_noticias, titulo, descricao, data, imagem, usuario, categoria } = req.body;
        let imagemPath = null;
        // req requisita algo do servidor e file indica que essa requisição irá possuir um arquivo enviado pelo usuário.
        if (req.file) {
            // ele pega o caminho completo do arquivo enviado pelo usuário, le ele e encurta, para facilitar a vida do desenvolvedor.
            imagemPath = req.file.path.replace(__dirname.replace('\\constrollers', ''), '');
        }
        // requisição do conteudo enviado pelo criador da noticia
        const noticiaData = 
        {
            id_noticias,
            titulo,
            descricao,
            data,
            imagem: imagemPath, // use o valor extraído corretamente
            usuario,
            categoria
          };

        await atualizarNoticia(noticiaId, noticiaData);
        res.status(201).json({ mensagem: 'Noticia atualizada com sucesso.' });
    } catch (err) {
        console.error('Erro ao atualizar noticia: ', err);
        res.status(500).json({ mensagem: 'Erro ao atualizar noticia.' });
    }
};

const excluirNoticiaController = async (req, res) => {
    try {
        const livroId = req.params.id;
        await excluirNoticia(livroId);
        res.status(200).json({ mensagem: 'Noticia excluida com sucesso.' });
    } catch (err) {
        console.error('Erro ao excluir noticia: ', err);
        res.atatus(500).json({ mensagem: 'Erro ao excluir noticia.' });
    }
}

export { listarNoticiasController, obterNoticiaPorIdController, criarNoticiaController, atualizarNoticiaController, excluirNoticiaController };