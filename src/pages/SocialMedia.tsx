import React from 'react';
import ContactButton from '../components/ContactButton';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function SocialMedia() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Gestão de Redes Sociais
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Automatize e potencialize sua presença nas redes sociais
            </p>
            <ContactButton product="Gestão de Redes Sociais" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Instagram className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-400">Automação de posts e stories</p>
              <img 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=500"
                alt="Instagram Management"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Facebook className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Facebook</h3>
              <p className="text-gray-400">Gestão de Anuncios no Ads</p>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500"
                alt="Facebook Management"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Twitter className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Google</h3>
              <p className="text-gray-400">Otimize seu site para o SEO do Google</p>
              <img 
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=500"
                alt="Twitter Management"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Youtube className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Whatsapp</h3>
              <p className="text-gray-400">Atendimento eficiente com IA</p>
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=500"
                alt="YouTube Management"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Economia de Tempo</h3>
              <p className="text-gray-400">
                Automatize tarefas repetitivas e foque no que realmente importa
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Consistência</h3>
              <p className="text-gray-400">
                Mantenha uma presença constante nas redes sociais
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Análise de Dados</h3>
              <p className="text-gray-400">
                Relatórios detalhados sobre o desempenho das suas redes sociais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Agendamento Inteligente</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Programação de posts em múltiplas redes</li>
                <li>Melhor horário para publicação</li>
                <li>Calendário de conteúdo</li>
              </ul>
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Monitoramento</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Análise de engajamento</li>
                <li>Métricas em tempo real</li>
                <li>Relatórios personalizados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}