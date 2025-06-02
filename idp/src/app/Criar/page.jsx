'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Roboto, Merriweather } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const CATEGORIAS = [
  'Educação',
  'Esporte',
  'Tecnologia',
  'Sustentabilidade',
  'Economia',
  'Cultura'
];

export default function Criar() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: new Date().toISOString().split('T')[0],
    imagem: null,
    usuario: '',
    categoria: ''
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        imagem: file
      }));
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'imagem') {
          if (formData[key]) {
            formDataToSend.append(key, formData[key]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch("http://localhost:3001/noticias", {
        method: 'POST',
        headers: {
          'Authorization': 'SEGREDO' // Token fixo para teste
        },
        body: formDataToSend
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.mensagem || 'Falha ao criar notícia');
      }

      const data = await response.json();
      setSuccess(true);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        router.push('/');
      }, 2000);

    } catch (err) {
      console.error('Erro detalhado:', err);
      setError(err.message || 'Falha ao criar notícia. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className={`${merriweather.className} text-3xl font-bold mb-8 text-center text-gray-800`}>
          Criar Nova Notícia
        </h1>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Notícia criada com sucesso! Redirecionando...
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Título */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              Título
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              Descrição
            </label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Data */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              Data
            </label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Imagem */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              Imagem
            </label>
            <input
              type="file"
              name="imagem"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Usuário */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              ID do Usuário
            </label>
            <input
              type="number"
              name="usuario"
              value={formData.usuario}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
              Categoria
            </label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            >
              <option value="">Selecione uma categoria</option>
              {CATEGORIAS.map(categoria => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          {/* Botão Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`
                ${roboto.className}
                px-6 py-2 bg-blue-600 text-white rounded-md
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                disabled:opacity-50 disabled:cursor-not-allowed
                transition duration-200
              `}
            >
              {loading ? 'Criando...' : 'Criar Notícia'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}