'use client'

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
        
  <div className="bg-black min-h-screen py-10">
<div className="max-w-2x1 mx-auto p-6 shadow-lg rouded-2x1">
<h1 className="text-2x4 font-bold mb-6 text-white-800 text-center">Adicionar Nova Noticia</h1>

  <form id="noticiaForm" className="space-y-4">

    <div>
    <label className="block text-sm font-medium text-white-700" htmlFor="titulo">Título:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="titulo" name="titulo" required="" />
    </div>

    <div>
    <label className="block text-sm font-medium text-white-700" htmlFor="descricao">Descrição:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="descricao" name="descricao" required="" />
    </div>

     <div>
    <label className="block text-sm font-medium text-white-700" htmlFor="data">Data da Postagem:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="date" id="data" name="data" required="" />
    </div>

     <div>
    <label className="block text-sm font-medium text-white-700" htmlFor="imagem">Imagem da Postagem:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="file" id="imagem" name="imagem" accept="image/*" required="" />
    </div>

     <div>
    <label className="block text-sm font-sm font-medium text-white-700" htmlFor="usuario">ID do Usuário:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="usuario" name="usuario" required="" />
     </div>

     <div>
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="categoria">Categoria da Noticia:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="categoria" name="categoria" required="" />
     </div>


    <button 
    className="w-100 bg-red-900 text-gray py-2 px-4 rouded-lg hover:bg-blue-900 transition duration-300"
    type="submit">Adicionar Noticia</button>
  </form>

  <div id="response" className="mt-6">
    <h2 className="text-sm text-gray-600 font-semibold">Resposta do Servidor:</h2>
    <pre id="responseContent" className="bg-gray-400 p-4 rouded-lg mt-2 text-sm text-gray-900" />
  </div>
  </div>
  </div>
</>
    )
}