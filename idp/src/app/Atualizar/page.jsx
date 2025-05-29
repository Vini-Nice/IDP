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
      
          const result = await response.json();
          setResponseContent(JSON.stringify(result, null, 2));
        } catch (error) {
          console.error('Erro ao atualizar notícia:', error);
          setResponseContent('Erro ao atualizar notícia.');
        }
      };

    if(!noticiaId) {
        return <p style={{ color: 'red' }}>ID da notícia não especificado na URL. Use: ?id_noticias=SEU_ID</p>;
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
  <h1>Editar Noticia</h1>
  <form id="noticiaForm" onSubmit={handleSubmit}>
    <label htmlFor="id_noticias">ID da Noticia:</label>
    <input type="number" id="id_noticias" name="id_noticias" required="" placeholder="Digite o ID da noticia que você deseja editar." />
    <label htmlFor="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" required="" value={formData.id_noticias} onChange={handleChange} />
    <label htmlFor="descricao">Descrição:</label>
    <input type="text" id="descricao" name="descricao" required="" value={formData.titulo} onChange={handleChange} />
    <label htmlFor="data">Data da Postagem:</label>
    <input type="date" id="data" name="data" required="" value={formData.descricao} onChange={handleChange} />
    <label htmlFor="imagem">Imagem da Postagem:</label>
    <input type="file" id="imagem" name="imagem" accept="image/*" required="" value={formData.imagem} onChange={handleChange} />
    <label htmlFor="usuario">ID do Usuário:</label>
    <input type="text" id="usuario" name="usuario" required="" value={formData.usuario} onChange={handleChange} />
    <label htmlFor="categoria">Categoria da Noticia:</label>
    <input type="text" id="categoria" name="categoria" required="" value={formData.categoria} onChange={handleChange} />
    <button type="submit">Atualizar Noticia.</button>
  </form>
  <div id="response">
    Resposta do Servidor:
    <pre id="responseContent" />
  </div>
</>

    )
}

