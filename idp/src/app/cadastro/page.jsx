'use client';



 // Importações 
 

import '../cadastro/cadastro.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


// UseStates e confirmação de senha

export default function Cadastro () {
    
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha]  = useState('');
    const [csenha, setCsenha] = useState('');
    const router = useRouter();

    const cadastrar = async (e) => {
        e.preventDefault();


        if(senha !== csenha) {
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
            router.push('/');
        } catch (err) {
            alert(err.response?.data?.erro || 'Erro no cadastro');
        }
    };



    return (


        


         // Título, textos e formulário



        <div className='formulario'>
            
    <h2 className='tituloc'>Bem-vindo ao IDP!</h2>
    <br></br>

    <div><h2 className='textoc'> Cadastre-se com seu email intitucional para começar sua jornada acedêmica.</h2></div>

    <div><h2 className='textoc2'> É sempre um prazer te ter aqui.</h2></div>

            <form className='formul' onSubmit={cadastrar}> 
                 
                 <div>
                
                     </div>

                   
                
                   <div>
                    
                   </div>


                   <br></br><br></br>
                <input
                    className='cpf'
                    type="text"
                    placeholder="Seu CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                  <br></br><br></br>
                <input
                    className='email'
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                  <br></br><br></br>
                <input 
                    className='senha'
                    type="password"
                    placeholder="Sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

               <br></br><br></br>

                <input
                   className='csenha'
                   type ="password"
                   placeholder='Confime sua senha'
                   value={csenha}
                   onChange={(e) => setCsenha(e.target.value)} 
                />
                
                <br></br><br></br>
               <button className='botao2' type='submit'>Cadastrar</button>
            </form>
            <br></br><br></br>
        </div>
        
    );
}