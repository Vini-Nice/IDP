'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ListaNoticias() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const [tipoUsuario, setTipoUsuario] = useState(); // visitante = padrão


    // De acordo com o tipo de usuário execulta certas funções (exemplo: alunos só podem criar notícias)
useEffect(() => {
  const dados = JSON.parse(localStorage.getItem('usuarioAutenticado'));
  if (dados?.email) {
    const email = dados.email;
    if (email.endsWith('@gestao.com')) {
      setTipoUsuario('gestao');
    } else if (email.endsWith('@professor.com') || email.endsWith('@gremio.com')) {
      setTipoUsuario('colaborador');
    } else if (email.endsWith('@aluno.com')) {
      setTipoUsuario('aluno');
    } else {
        setTipoUsuario('visitante')
    } 
  }
}, []);


    useEffect(() => {
        fetchNoticias();
    }, []);

    const fetchNoticias = async () => {
        try {
            const response = await fetch('http://localhost:3001/noticias');
            if (!response.ok) {
                throw new Error('Falha ao carregar notícias');
            }
            const data = await response.json();
            setNoticias(data);
        } catch (err) {
            setError('Erro ao carregar notícias');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEditar = (id) => {
        router.push(`/Atualizar?id_noticias=${id}`);
    };

    const handleDeletar = (id) => {
        if (confirm('Tem certeza que deseja excluir esta notícia?')) {
            router.push(`/Deletar?id_noticias=${id}`);
        }
    };

    const getImageUrl = (imagem) => {
        if (!imagem) return '/placeholder.jpg';
        
        // Se a imagem começar com 'not' ou estiver no formato antigo
        if (imagem.startsWith('not') || imagem.startsWith('/noticias.imgs/')) {
            return `/noticias.imgs/${imagem.replace('/noticias.imgs/', '')}`;
        }
        
        // Caso contrário, é uma imagem nova do upload
        return `http://localhost:3001/upload/${imagem}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <p className="text-gray-600">Carregando notícias...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-red-600">
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
       
        <div className="min-h-screen bg-gray-50 p-8">
           

            <div className="max-w-7xl mx-auto">
            
                <div className="flex justify-between items-center mb-8">

                {(tipoUsuario !== 'aluno' && tipoUsuario !== 'visitante') && (
               
                    <h1 className="text-3xl font-bold text-gray-800">Gerenciar Notícias</h1>
                )}
                    
                    {(tipoUsuario !== 'aluno' && tipoUsuario !== 'visitante') && (
                    <button
                        onClick={() => router.push('/Criar')}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Nova Notícia
                    </button>
            )}
                    
                </div>
           

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noticias.map((noticia) => (
                        <div key={noticia.id_noticias} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={getImageUrl(noticia.imagem)}
                                    alt={noticia.titulo}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {noticia.titulo}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {noticia.descricao}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">
                                        {new Date(noticia.data).toLocaleDateString('pt-BR')}
                                    </span>

                                    {tipoUsuario === 'gestao' && (

                                    <div className="space-x-2">
                                        <button
                                            onClick={() => handleEditar(noticia.id_noticias)}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDeletar(noticia.id_noticias)}
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                     )}


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 