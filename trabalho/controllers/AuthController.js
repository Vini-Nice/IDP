import { read } from '../config/db.js';
import { compare } from 'bcrypt';

const loginController = async (req, res) => {
    const { email, senha, cargo } = req.body;
    try {
        const usuario = await read('Usuarios', `email = '${email}'`);
            if (!usuario) {
                return res.status(401).json({ mensagem: 'Usuário não encontrado.' });    
            } else {
                const senhaCorreta = await compare(senha, usuario.senha);
                if(!senhaCorreta) {
                    return res.status(400).json({ mensagem: 'Senha incorreta.' });
                }

                if(cargo != usuario.cargo) {
                    return res.status(401).json({ mensagem: 'Cargo inválido' });
                }

                return res.status(200).json({ mensagem: 'Login realizado.' });    
            };
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
}

export { loginController };