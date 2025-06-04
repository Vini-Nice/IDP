'use client';

// Importações 

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Funcionalidade (Confirmação de senha, Verificação email institucional, entre outros)

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== csenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const resposta = await axios.post('http://localhost:3004/login', {
        email,
        senha,
      });

      alert(resposta.data.mensagem);

      localStorage.setItem('usuarioAutenticado', JSON.stringify({
        email: resposta.data.email
      }));

      const emailUsuario = resposta.data.email || email;

      if (emailUsuario.endsWith('@aluno.com')) {
        router.push('/');
      } else if (emailUsuario.endsWith('@gestao.com')) {
        router.push('/noticias');
      } else if (
        emailUsuario.endsWith('@gremio.com') ||
        emailUsuario.endsWith('@professor.com')
      ) {
        router.push('/');
      } else {
        router.push('/');
      }

    } catch (erro) {
      if (erro.response) {
        alert(erro.response.data.mensagem);
      } else {
        alert('Erro ao fazer login.');
      }
    }
  };


  // Formulário

  return (

    <div className="relative min-h-screen">
     <div 
     className="absolute inset-0 bg-cover bg-center opacity-40 bg-no-repeat z-0"
style={{backgroundImage: "url('/geral.imgs/fundo.png')",
    
}}
    ></div>



    <div className="relative z-0 min-h-screen from-blue-100 to-white flex items-center justify-center p-4">
      <div className="mt-60 w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700">Sua melhor experiência escolar.</h1>
        <hr className="my-4 border-t-2 border-blue-300" />
        
        <h2 className="text-lg text-center text-gray-700 mb-4">
          Faça seu login para entrar e explorar as novidades do <br />
          Colégio técnico Instituto Dom Pedro II
        </h2>

        <h2 className="text-md text-center text-gray-600 mb-6">
          Se mantenha informado da melhor forma possível
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Seu email:
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sua senha:
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirme sua senha:
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              value={csenha}
              onChange={(e) => setCsenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center space-y-2 text-sm">
          <button
            onClick={() => router.push('/Cadastro')}
            className="text-blue-600 hover:underline"
          >
            Não tem conta? Cadastre-se!
          </button>

          <button
            onClick={() => router.push('/Esquecisenha')}
            className="text-blue-600 hover:underline"
          >
            Esqueci minha senha
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}









