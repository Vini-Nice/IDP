'use client'
import './index.css'

import { useEffect } from "react";

export default function Criar() {
    useEffect(() => {
        const form = document.getElementById("noticiaForm");

        if(form) {
            form.addEventListener("submit", async function (event) {
                event.preventDefault();
                
                const titulo = form.titulo.value;
                const conteudo = form.conteudo.value;

    //          const form = document.getElementById('noticiaForm');
    //          const formData = new FormData(form);

                const response = await fetch("/api/noticias", {
                    method: 'POST',
                headers: {
                    'Authorization': 'SEGREDO' // Substitua pelo seu token JWT
                },
                body: formData
                });
                const data = await response.json();
                document.getElementById('responseContent').textContent = JSON.stringify(data, null, 2);
            });
        }

        return () => {
            if(form) {
                form.removeEventListener("submit", () => {});
            }
        };
    }, []);
    
    // document.getElementById('noticiaForm').addEventListener('submit', async function(event) {
    //     event.preventDefault();

    //     const form = document.getElementById('noticiaForm');
    //     const formData = new FormData(form);

    //     try {
    //         const response = await fetch('http://localhost:3000/noticias', {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'SEGREDO' // Substitua pelo seu token JWT
    //             },
    //             body: formData
    //         });

    //         const data = await response.json();
    //         document.getElementById('responseContent').textContent = JSON.stringify(data, null, 2);
    //     } catch (error) {
    //         console.error('Erro:', error);
    //         document.getElementById('responseContent').textContent = 'Erro ao enviar os dados.';
    //     }
    // });
    
    return (
        <>
  <h1>Adicionar Nova Noticia</h1>
  <form id="noticiaForm">
    <label htmlFor="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" required="" />
    <label htmlFor="descricao">Descrição:</label>
    <input type="text" id="descricao" name="descricao" required="" />
    <label htmlFor="data">Data da Postagem:</label>
    <input type="date" id="data" name="data" required="" />
    <label htmlFor="imagem">Imagem da Postagem:</label>
    <input type="file" id="imagem" name="imagem" accept="image/*" required="" />
    <label htmlFor="usuario">ID do Usuário:</label>
    <input type="text" id="usuario" name="usuario" required="" />
    <label htmlFor="categoria">Categoria da Noticia:</label>
    <input type="text" id="categoria" name="categoria" required="" />
    <button type="submit">Adicionar Noticia</button>
  </form>
  <div id="response">
    Resposta do Servidor:
    <pre id="responseContent" />
  </div>
</>
    )
}