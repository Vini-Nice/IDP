'use client';

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [csenha, setCsenha] = useState("");
  const router = useRouter();

  const handleRedefinirSenha = async (e) => {
    e.preventDefault();

    if (csenha !== novaSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    const dominiosPermitidos = ["@aluno.com", "@gestao.com", "@gremio.com", "@professor.com"];
    const emailValido = dominiosPermitidos.some((dominio) => email.endsWith(dominio));

    if (!emailValido) {
      alert("Apenas e-mails institucionais são permitidos.");
      return;
    }

    try {
      const resposta = await axios.post("http://localhost:3001/esquecisenha", {
        email,
        novaSenha,
      });

      alert(resposta.data.mensagem || "Senha atualizada com sucesso!");
      router.push("/");
    } catch (err) {
      alert(err.response?.data?.mensagem || "Erro ao redefinir a senha.");
    }
  };

  return (

    <div className="relative min-h-screen">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
    style={{ backgroundImage: "url('/geral.imgs/fundo.png')"}}
  ></div>

  <div className="absolute inset-0  z-10"></div>

  <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        
<div className="mt-130 w-full max-w-md bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl ">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Esqueceu sua senha?</h2>
        <p className="text-center text-gray-700 mt-2">
          Digite seu e-mail institucional e escolha uma nova senha.
        </p>

        <form onSubmit={handleRedefinirSenha} className="mt-6 space-y-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="email"
            placeholder="Digite seu e-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="password"
            placeholder="Digite a nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            type="password"
            placeholder="Confirme sua nova senha"
            value={csenha}
            onChange={(e) => setCsenha(e.target.value)}
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            type="submit"
          >
            Redefinir senha
          </button>
        </form>
      </div>
    </div>
 
  </div>


  )
};


  