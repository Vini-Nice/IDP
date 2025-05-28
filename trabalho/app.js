import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';


import noticiasRotas from './routes/noticiasRotas.js';
import authRotas from './routes/authRotas.js';

app.use(cors());
app.use(express.json());

app.use('/auth', authRotas);
app.use('/noticias', noticiasRotas);

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
    console.log(`Servidor rodando em http://localhost:${3000}`);





});



