import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, ShoppingBag, Code, Share2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Transforme seu negócio com tecnologia
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              Soluções completas em software para impulsionar seu crescimento
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/gym-manager" className="group">
              <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
                <ShoppingBag className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">MvK Gym Manager</h3>
                <p className="text-gray-400">Gestão para academias</p>
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500"
                  alt="Gym Management"
                  className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
            <Link to="/cardapio" className="group">
              <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
                <Laptop className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">MvK Cardápio</h3>
                <p className="text-gray-400">Solução para restaurantes</p>
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500"
                  alt="Restaurant Management"
                  className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
            <Link to="/web-development" className="group">
              <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
                <Code className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-400">Sites e portfólios personalizados</p>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500"
                  alt="Web Development"
                  className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
            <Link to="/social-media" className="group">
              <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
                <Share2 className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-400">Automação para redes sociais</p>
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500"
                  alt="Social Media Management"
                  className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Por que escolher a MvK Devs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Experiência</h3>
                <p className="text-gray-400">Anos de experiência no desenvolvimento de soluções tecnológicas</p>
              </div>
              <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Suporte</h3>
                <p className="text-gray-400">Suporte técnico especializado e atendimento personalizado</p>
              </div>
              <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Inovação</h3>
                <p className="text-gray-400">Tecnologias modernas e soluções inovadoras</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}