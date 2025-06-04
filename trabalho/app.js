import express from 'express';
const app = express();
const port = 3001;
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import noticiasRotas from './routes/noticiasRotas.js';

app.use(cors());
app.use(express.json());

// Configuração para servir arquivos estáticos da pasta upload
const uploadPath = path.join(__dirname, 'upload');
console.log('Pasta de upload:', uploadPath);
app.use('/upload', express.static(uploadPath));

app.use('/noticias', noticiasRotas);

// Rota para testar se o arquivo existe
app.get('/check-image/:filename', (req, res) => {
    const filePath = path.join(uploadPath, req.params.filename);
    console.log('Verificando arquivo:', filePath);
    if (fs.existsSync(filePath)) {
        res.json({ exists: true, path: filePath });
    } else {
        res.json({ exists: false, path: filePath });
    }
});

app.get('/', (req, res) => {
    res.status(201).send('<h1>API de Noticias.</h1>')
});

app.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({ mensagem: 'Rota não encontrada.' })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3001}`);
});



