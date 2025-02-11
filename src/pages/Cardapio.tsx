import React from 'react';
import ContactButton from '../components/ContactButton';
import { Utensils, ClipboardList, CreditCard, PieChart } from 'lucide-react';

export default function Cardapio() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              MvK Cardápio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Gestão completa para restaurantes
            </p>
            <ContactButton product="MvK Cardápio" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Utensils className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cardápio Digital</h3>
              <p className="text-gray-400">Cardápio online atualizado em tempo real</p>
              <img 
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500"
                alt="Digital Menu"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <ClipboardList className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestão de Pedidos</h3>
              <p className="text-gray-400">Controle de pedidos e comandas</p>
              <img 
                src="https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?auto=format&fit=crop&w=500"
                alt="Order Management"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <CreditCard className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pagamentos</h3>
              <p className="text-gray-400">Integração com sistemas de pagamento</p>
              <img 
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=500"
                alt="Payment System"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <PieChart className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Relatórios</h3>
              <p className="text-gray-400">Análises e relatórios detalhados</p>
              <img 
                src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=500"
                alt="Analytics Dashboard"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Aumente suas vendas</h3>
              <p className="text-gray-400">
                Cardápio digital atrativo e fácil de atualizar
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Otimize processos</h3>
              <p className="text-gray-400">
                Reduza erros e agilize o atendimento
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}