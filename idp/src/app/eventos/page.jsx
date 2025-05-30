import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const eventos = [
    {
        title: 'Feira de Ciências 2024',
        image: '/imgs/imgsteste/feiraciencias.png',
        description: 'Apresentação dos projetos científicos desenvolvidos pelos alunos durante o ano letivo.',
        date: '20 de abril de 2024',
    },
    {
        title: 'Olimpíada de Matemática',
        image: '/imgs/imgsteste/olimpiadamat.png',
        description: 'Competição interna de matemática com premiações para os melhores colocados.',
        date: '15 de maio de 2024',
    },
    {
        title: 'Festival Cultural',
        image: '/imgs/imgsteste/cultural.png',
        description: 'Celebração da diversidade cultural com apresentações artísticas e exposições.',
        date: '10 de junho de 2024',
    }
]

export default function Eventos() {
    return (
        <div className={`min-h-screen bg-white ${roboto.className}`}>
            {/* Informação da página */}
            <div className="bg-blue-600 text-white py-8 sm:py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center sm:text-left">
                        Eventos Escolares
                    </h1>
                    <p className="text-blue-100 text-center sm:text-left text-sm sm:text-base">
                        Confira os próximos eventos da nossa escola
                    </p>
                </div>
            </div>

            {/* Eventos */}
            <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {eventos.map((evento, index) => (
                        <div key={index} 
                             className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 
                                        transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="h-40 sm:h-48 bg-blue-100 relative">
                                {evento.image ? (
                                    <Image
                                        src={evento.image}
                                        alt={evento.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 
                                               (max-width: 1024px) 50vw,
                                               33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 sm:p-6">
                                <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-2">{evento.date}</p>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{evento.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{evento.description}</p>
                            </div>
                            <div className="px-4 sm:px-6 pb-4">
                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md 
                                                 hover:bg-blue-700 transition-colors duration-300
                                                 text-sm sm:text-base font-medium
                                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}