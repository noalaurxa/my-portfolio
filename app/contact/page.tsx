import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo para oportunidades y colaboraciones.',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">Contacto</h1>
      <p className="text-gray-600 mb-8 text-lg">
        ¿Tienes algún proyecto en mente o quieres saludar? Llena el formulario a continuación o envíame un correo directamente a <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">{personalInfo.email}</a>.
      </p>

      <form className="bg-white shadow-md rounded-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 border rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 border rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
          <textarea
            id="message"
            rows={5}
            className="w-full border-gray-300 border rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            placeholder="¿En qué te puedo ayudar?"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
