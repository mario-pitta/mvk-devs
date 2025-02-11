import React from 'react';
import ContactButton from '../components/ContactButton';
import { Globe, Smartphone, Search, Zap } from 'lucide-react';

export default function WebDevelopment() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Desenvolvimento Web
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Sites e portfólios personalizados para seu negócio
            </p>
            <ContactButton product="Desenvolvimento Web" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Globe className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sites Institucionais</h3>
              <p className="text-gray-400">Presença online profissional para sua empresa</p>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
                alt="Corporate Website"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Smartphone className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Design Responsivo</h3>
              <p className="text-gray-400">Sites adaptados para todos os dispositivos</p>
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500"
                alt="Responsive Design"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Search className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-gray-400">Otimização para mecanismos de busca</p>
              <img 
                src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=500"
                alt="SEO Optimization"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Zap className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-gray-400">Sites rápidos e otimizados</p>
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500"
                alt="Website Performance"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nosso Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">1. Planejamento</h3>
              <p className="text-gray-400">
                Entendemos suas necessidades e definimos a melhor estratégia
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">2. Design</h3>
              <p className="text-gray-400">
                Criamos layouts modernos e intuitivos
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">3. Desenvolvimento</h3>
              <p className="text-gray-400">
                Implementamos seu site com as melhores tecnologias
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}