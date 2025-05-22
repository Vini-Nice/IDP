"use client";

// Importações

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./esquecisenha.css"; 




// UseStates e confirmação de senha

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




    // Validação de domínio institucional

    try {


      const dominiosPermitidos = ["@aluno.com", "@gestao.com", "@gremio.com", "@professor.com"];
      const emailValido = dominiosPermitidos.some((dominio) => email.endsWith(dominio));

      if (!emailValido) {
        alert("Apenas e-mails institucionais são permitidos.");
        return;
      }

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
    <div className="tituloes">
      Esqueceu sua senha?
      <h4 className="textoes">
        Digite seu e-mail institucional e escolha uma nova senha.
      </h4>

      <form onSubmit={handleRedefinirSenha} className="formes">
        <input
          className="inputes"
          type="email"
          placeholder="Digite seu email institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

       <br></br>

        <input
          className="inputes"
          type="password"
          placeholder="Digite a nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
        />


          <br></br>

          <input
          className="inputes"
          type="password"
          placeholder="Confime sua nova senha"
          value={csenha}
          onChange={(e) => setCsenha(e.target.value)}
          required
        /> 



        

        <button className="botaoes" type="submit">
          Redefinir senha
        </button>
      </form>
      <br></br>
    </div>
  );
}