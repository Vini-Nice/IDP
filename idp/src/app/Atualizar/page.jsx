'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Atualizar() {
    const searchParams = useSearchParams();
    const noticiaId = searchParams.get('id_noticias');

    const [formData, setFormData] = useState({
        id_noticias: '',
        titulo: '',
        descricao: '',
        data: '',
        imagem: null,
        usuario: '',
        categoria: ''
    });

    const [responseContent, setResponseContent] = useState('');

    useEffect(() => {
        if (!noticiaId) return;

        setFormData(prev => ({ ...prev, id_noticias: noticiaId }));

        fetch(`http://localhost:3001/noticias/${noticiaId}`)
        .then(response => response.json())
        .then(data => {
            setFormData({
                id_noticias: noticiaId,
                titulo: data.titulo || '',
                descricao: data.descricao || '',
                data: data.data?.substring(0, 10) || '',
                imagem: null, // não vem da API
                usuario: data.usuario || '',
                categoria: data.categoria || ''
            });
        })
        .catch(error => {
            console.error('Erro ao carregar a notícia:', error);
            setResponseContent('Erro ao carregar as informações da notícia.');
        });
    }, [noticiaId]);

    function handleChange(e) {
        const { name, value, files } =e.target;

        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formElement = e.target;
        const formDataToSend = new FormData(formElement);
      
        try {
          const response = await fetch(`http://localhost:3001/noticias/${formData.id_noticias}`, {
            method: 'PUT',
            headers: {
              'Authorization': 'SEGREDO'
            },
            body: formDataToSend
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ${response.status}: ${errorText}`);
          } 
      
          const result = await response.json();
          setResponseContent(JSON.stringify(result, null, 2));
        } catch (error) {
          console.error('Erro ao atualizar notícia:', error);
          setResponseContent('Erro ao atualizar notícia.');
        }
      };

    if(!noticiaId) {
        return   <div className="bg-black min-h-screen py-100">
          <div className="max-w-2x1 mx-auto p-40 shadow-lg rouded-2x1">
          <h1 className="text-2x1 font-bold mb-10 text-red-800 text-center" style={{ color: 'red' }}>ID da notícia não especificado na URL. Use: ?id_noticias=SEU_ID</h1></div></div>;
    }
    
    // useEffect(() => {
    //     function getParameterByName(name, url = window.location.href) {
    //         name = name.replace(/[\[\]]/g, '\\$&');
    //         var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    //             results = regex.exec(url);
    //         if (!results) return null;
    //         if (!results[2]) return '';
    //         return decodeURIComponent(results[2].replace(/\+/g, ' '));
    //     }
        
    //     const noticiaId = getParameterByName('id_noticias');
        
    //     if (!noticiaId) {
    //         document.body.innerHTML = '<p style="color: red;">ID da noticia não especificado na URL. Use: testeUpdate.html?id=SEU_ID</p>';
    //     } else {
    //         document.getElementById('id_noticias').value = noticiaId;
        
    //         fetch(`http://localhost:3000/noticias/${noticiaId}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 document.getElementById('titulo').value = data.titulo || '';
    //                 document.getElementById('descricao').value = data.descricao || '';
    //                 document.getElementById('data').value = data.data.substring(0, 10) || '';
    //                 document.getElementById('imagem').value = data.imagem || '';
    //                 document.getElementById('usuario').value = data.usuario || '';
    //                 document.getElementById('categoria').value = data.categoria || '';
    //             })
    //             .catch(error => {
    //                 console.error('Erro ao carregar as informações do noticia:', error);
    //                 document.getElementById('responseContent').textContent = 'Erro ao carregar as informações do noticia.';
    //             });
        
    //         document.getElementById('noticiaForm').addEventListener('submit', async function(event) {
    //             event.preventDefault();
        
    //             const dataInput = document.getElementById('data');
    //             dataInput.value = dataInput.value.substring(0, 10);
        
    //             const form = document.getElementById('noticiaForm');
    //             const formData = new FormData(form);
        
    //             try {
    //                 const response = await fetch(`http://localhost:3000/noticias/${noticiaId}`, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Authorization': `SEGREDO` // Substitua pelo seu token JWT
    //                     },
    //                     body: formData
                        
    //                 });
        
    //                 const data = await response.json();
    //                 document.getElementById('responseContent').textContent = JSON.stringify(data, null, 2);
    //             } catch (error) {
    //                 console.error('Erro:', error);
    //                 document.getElementById('responseContent').textContent = 'Erro ao enviar os dados.';
    //             }
    //         });
    //     }
    // })
    return (
<>
  <div className="bg-black min-h-screen py-10">

<div className="max-w-2x1 mx-auto p-6 shadow-lg rounded-2x1">
  <h1 className="text-2x4 font-bold mb-6 text-white-800 text-center">Editar Noticia</h1>



  <form id="noticiaForm" onSubmit={handleSubmit} className="space-y-4">

  
    <div>
    <label htmlFor="id_noticias"></label >
    <input type="hidden" name="id_noticias" value={formData.id_noticias} onChange={handleChange}/>
    </div>


    <div>
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="titulo">Título:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="titulo" name="titulo" required="" value={formData.titulo} onChange={handleChange} />
    </div>

    <div>
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="descricao">Descrição:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="descricao" name="descricao" required="" value={formData.descricao} onChange={handleChange} />
    </div>

    <div> 
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="data">Data da Postagem:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="date" id="data" name="data" required="" value={formData.data} onChange={handleChange} />
    </div>


    <div>
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="imagem">Imagem da Postagem:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="file" id="imagem" name="imagem" accept="image/*" onChange={handleChange} />
    </div>

    <div>
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="usuario">ID do Usuário:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="usuario" name="usuario" required="" value={formData.usuario} onChange={handleChange} />
    </div>

    <div >
    <label className="block text-sm font-sm font-medium text-gray-700" htmlFor="categoria">Categoria da Noticia:</label>
    <input className="mt-1 block w-full py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-700" type="text" id="categoria" name="categoria" required="" value={formData.categoria} onChange={handleChange} />
    </div>

    <button 
    className="w-100 bg-red-900 text-gray py-2 px-4 rouded-lg hover:bg-blue-900 transition duration-300"
    type="submit">Atualizar Noticia.</button>
  </form>
  <div id="response" className="mt-6">
    Resposta do Servidor:
    <pre  className="bg-gray-400 p-4 rouded-lg mt-2 text-sm text-gray-900" >{responseContent}</pre>
  </div>
  </div>
  </div>
</>

    )
}

