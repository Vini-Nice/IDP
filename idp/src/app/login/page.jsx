"use client";


 // Importações 


import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import './login/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  


    try {
      const resposta = await axios.post('http://localhost:3001/login', {
        email,
        senha,
      });

      // Exibindo mensagens como alert

      alert(resposta.data.mensagem);


      localStorage.setItem('usuarioAutenticado', JSON.stringify({
        email: resposta.data.email
      }));


   // Ir para a página Home (se for aluno)
   // Adimistarativa (se for da gestão) 
   //e de criação de notícias (se for do grêmio ou professor)
     
   const emailUsuario = resposta.data.email || email;

   if (emailUsuario.endsWith('@aluno.com')) {
     router.push('/home1');
   } else if (emailUsuario.endsWith('@gestao.com')) {
     router.push('/home2');
   } else if (
     emailUsuario.endsWith('@gremio.com') ||
     emailUsuario.endsWith('@professor.com')
   ) {
     router.push('/home3');
   } else {
     alert('Você não pode ter acesso a esse site infelizmente, só pessoas que estudam ou trabalham no Colégio.');
   }

 } catch (erro) {
   if (erro.response) {
     alert(erro.response.data.mensagem);
   } else {
     alert('Erro ao fazer login.');
   }
 }
};



 // Títulos, textos e formulários

  return (
    <div className="l2">
      <div className="final-container" >
        <br></br>
        <h1 className="titulol">Sua melhor experiência escolar.</h1>
        
        <hr className="linha-divisoria" />
         
         <h2 className='texto1'>Faça seu login para entrar 
e explorar as novidades do  Colégio técnico 
Instituto Dom Pedro II </h2>


<div>
<h2 className='texto2'>Se mantenha infomado da<br></br> melhor forma possível</h2>
</div>


<div className='form'>

        <form className="form-login" onSubmit={handleSubmit}>
          <label><br></br>
            <i>Seu email:<br></br></i>
            <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
            <br></br><br></br>
          <label>
            <i>Sua senha: <br></br></i>
            <input className='input' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </label>
               <br></br><br></br>
          <button className='botao1' type="submit">Entrar</button>
          <br></br><br></br><br></br>

          <a className='cadastro' onClick={() => router.push('/cadastro')}>
    Não tem conta? Cadastre-se!
    </a>  

<br></br><br></br>

    <a className='esqsenha' onClick={() => router.push('/esquecisenha')}>
      Esqueci minha senha
    </a>  

   
        </form>
</div>
       
</div>
  </div>

      
  );
}