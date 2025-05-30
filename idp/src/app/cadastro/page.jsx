'use client';

// Importações

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


// Funcionalidade (Confirmação de senha, Validação de email institucional)

export default function Cadastro() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const router = useRouter();

  const cadastrar = async (e) => {
    e.preventDefault();

    if (senha !== csenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/api/cadastrar', {
        cpf,
        email,
        senha,
      });
      alert(res.data.mensagem);
      router.push('./Login');
    } catch (err) {
      alert(err.response?.data?.erro || 'Erro no cadastro');
    }
  };


  // Formulário

  return (

<div className="relative min-h-screen">
    <div
    className="absolute inset-0 bg-cover bg-center opacity-40 bg-no-repeat z-0"
style={{backgroundImage: "url('/geral.imgs/fundo.png')"}}

></div>


    <div className="relative z-10 min-h-screen from-blue-100 to-white flex items-center justify-center p-4">
      <div className="mt-90 w-full max-w-md rounded-2xl shadow-lg p-6 bg-white/90">
        <h2 className="text-2xl font-bold text-center text-blue-700">Bem-vindo ao IDP!</h2>
        <p className="text-center text-gray-700 mt-4">
          Cadastre-se com seu email institucional para começar sua jornada acadêmica.
        </p>
        <p className="text-center text-gray-500 mt-1">É sempre um prazer te ter aqui.</p>

        <form className="mt-6 space-y-4" onSubmit={cadastrar}>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="text"
            placeholder="Seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="password"
            placeholder="Confirme sua senha"
            value={csenha}
            onChange={(e) => setCsenha(e.target.value)}
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-gray-700"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
    </div>
    
    
  );
}
