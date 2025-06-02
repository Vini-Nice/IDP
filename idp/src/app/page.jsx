'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./components/Carousel/Carousel";
import { buscarNoticias } from "./services/noticiasService";
import { Roboto, Merriweather, Playfair_Display } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarNoticias = async () => {
      try {
        const data = await buscarNoticias();
        setNoticias(data);
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        setError('Falha ao carregar notícias. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    carregarNoticias();
  }, []);

  // Função para formatar a data
  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Função para pegar a imagem (com fallback)
  const getImageUrl = (noticia) => {
    if (!noticia.imagem) return '/noticias.imgs/default.png';
    
    // Se a imagem começar com 'not' ou estiver no formato antigo
    if (noticia.imagem.startsWith('not') || noticia.imagem.startsWith('/noticias.imgs/')) {
      return `/noticias.imgs/${noticia.imagem.replace('/noticias.imgs/', '')}`;
    }
    
    // Caso contrário, é uma imagem nova do upload
    return `http://localhost:3001/upload/${noticia.imagem}`;
  };

  // Pega as imagens das 4 notícias mais recentes para o carrossel
  const carouselImages = noticias
    .slice(0, 4)
    .map(noticia => getImageUrl(noticia));

  if (loading) {
    return (
      <div className="h-full min-h-48 flex items-center justify-center">
        <p className={`${roboto.className}`}>Carregando notícias...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full min-h-48 flex items-center justify-center">
        <p className={`${roboto.className} text-red-500`}>{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Carrossel */}
      <div className="h-full min-h-48 flex flex-col items-center justify-center p-2 bg-gray-100">
        <h2 className={`${merriweather.className} text-black italic font-bold mb-4`}>
          Principais notícias
        </h2>
        <Carousel 
          images={carouselImages.length > 0 ? carouselImages : [
            "/imgs/imgsteste/futsal.jpeg",
            "/imgs/imgsteste/junina.png",
            "/imgs/imgsteste/exame.jpg",
            "/imgs/imgsteste/reuniao.png",
          ]} 
        />
      </div>

      <br className="bg-gray-100" />

      {/* Grid de Notícias */}
      <div className="flex w-full items-center justify-center p-3 bg-gray-100 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {noticias.map((noticia) => (
            <Link 
              href={`/noticias/${noticia.id_noticias}`}
              key={noticia.id_noticias}
              className="block"
            >
              <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-110 h-full">
                <div className="relative">
                  <Image
                    src={getImageUrl(noticia)}
                    alt={noticia.titulo}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {noticia.categoria}
                  </span>
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className={`${merriweather.className} text-lg font-bold mb-2 line-clamp-2`}>
                    {noticia.titulo}
                  </h2>
                  <p className={`${roboto.className} text-sm text-gray-600 mb-2`}>
                    {formatarData(noticia.data)}
                  </p>
                  <p className={`${roboto.className} text-sm text-gray-700 line-clamp-3 mb-4`}>
                    {noticia.descricao}
                  </p>
                  <span 
                    className="mt-auto text-blue-600 hover:text-blue-800 text-sm font-semibold"
                  >
                    Ler mais →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}