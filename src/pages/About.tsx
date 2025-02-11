import React from 'react';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Sobre a MvK Devs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transformando ideias em soluções tecnológicas
            </p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                Fundada em 2023, a MvK Devs nasceu da paixão por tecnologia e da vontade de transformar 
                o mercado digital brasileiro. Nossa missão é desenvolver soluções tecnológicas que 
                realmente fazem a diferença no dia a dia das empresas.
              </p>
              <p className="text-gray-300">
                Com uma equipe altamente qualificada e comprometida, nos especializamos em criar 
                produtos que não apenas atendem às necessidades atuais, mas também antecipam as 
                demandas futuras do mercado.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Equipe MvK Devs"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <Users className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Foco no Cliente</h3>
              <p className="text-gray-400">
                Priorizamos as necessidades e objetivos dos nossos clientes em cada projeto
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <Target className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Excelência</h3>
              <p className="text-gray-400">
                Buscamos a excelência em cada linha de código que escrevemos
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <Lightbulb className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Inovação</h3>
              <p className="text-gray-400">
                Sempre em busca das melhores e mais modernas soluções
              </p>
            </div>
            <div className="gradient-border bg-dark p-6 hover-gradient transition-all duration-300">
              <Trophy className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Resultados</h3>
              <p className="text-gray-400">
                Comprometidos com o sucesso e crescimento dos nossos clientes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}