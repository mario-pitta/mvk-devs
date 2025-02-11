import React from 'react';
import ContactButton from '../components/ContactButton';
import { Dumbbell, Users, Calendar, BarChart } from 'lucide-react';

export default function GymManager() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              MvK Gym Manager
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Sistema completo para gestão de academias
            </p>
            <ContactButton product="MvK Gym Manager" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Dumbbell className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Controle de Equipamentos</h3>
              <p className="text-gray-400">Gestão completa do seu parque de equipamentos</p>
              <img 
                src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&w=500"
                alt="Gym Equipment"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestão de Alunos</h3>
              <p className="text-gray-400">Cadastro e acompanhamento de alunos</p>
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=500"
                alt="Gym Members"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <Calendar className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Agendamentos</h3>
              <p className="text-gray-400">Sistema de agendamento de aulas e horários</p>
              <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=500"
                alt="Class Schedule"
                className="mt-4 rounded-lg w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300">
              <BarChart className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Relatórios</h3>
              <p className="text-gray-400">Relatórios detalhados e análises</p>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500"
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
              <h3 className="text-xl font-bold mb-4 text-blue-400">Aumente sua eficiência</h3>
              <p className="text-gray-400">
                Automatize processos e reduza o tempo gasto com tarefas administrativas
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Melhore a experiência</h3>
              <p className="text-gray-400">
                Ofereça um atendimento mais personalizado aos seus alunos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}