'use client'
import React from 'react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/90 to-blue-800/90">
          <div className="container mx-auto px-4 sm:px-6 h-full flex items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
              Instituto Dom Pedro II: Inovação e Tecnologia para o Futuro
            </h1>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 sm:mb-6">
              Nossa Missão
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              O Instituto Dom Pedro II é uma instituição de ensino moderna que tem como 
              objetivo principal preparar os estudantes para os desafios do século XXI. 
              Combinamos tradição educacional com as mais recentes inovações tecnológicas, 
              proporcionando uma experiência de aprendizado única e transformadora.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 sm:mb-6">
              Nossa Visão
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Buscamos ser referência em educação tecnológica, formando líderes e 
              inovadores que farão a diferença no mundo. Acreditamos que a tecnologia, 
              aliada a uma base educacional sólida, é a chave para desenvolver o 
              potencial máximo de cada aluno.
            </p>
          </div>
        </div>

        {/* Seção de Valores */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8 sm:mb-12 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">Inovação</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Estimulamos o pensamento criativo e a busca por soluções inovadoras em todas as áreas.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">Excelência</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Buscamos a excelência em tudo que fazemos, desde o ensino até a infraestrutura.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">Tecnologia</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Integramos tecnologia de ponta em nossa metodologia de ensino.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Final */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 sm:mb-6">
            Faça Parte do Futuro
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto px-4">
            No Instituto Dom Pedro II, preparamos nossos alunos para serem protagonistas 
            de um futuro cada vez mais tecnológico e conectado. Venha fazer parte dessa 
            jornada de inovação e descobertas.
          </p>
        </div>
      </div>
    </div>
  );
} 