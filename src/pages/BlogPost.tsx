import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BlogPostContent {
  slug: string;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

const blogPosts: Record<string, BlogPostContent> = {
  'como-escolher-sistema-gestao-academia': {
    slug: 'como-escolher-sistema-gestao-academia',
    title: 'Como escolher o melhor sistema de gestão para sua academia',
    content: `
      <p>A escolha de um sistema de gestão adequado é fundamental para o sucesso de uma academia moderna. Neste artigo, vamos explorar os principais aspectos que você deve considerar antes de fazer sua escolha.</p>
      
      <h2>1. Funcionalidades essenciais</h2>
      <p>Um bom sistema deve incluir:</p>
      <ul>
        <li>Controle de acesso dos alunos</li>
        <li>Gestão de mensalidades</li>
        <li>Agendamento de aulas</li>
        <li>Avaliação física</li>
      </ul>

      <h2>2. Facilidade de uso</h2>
      <p>A interface deve ser intuitiva tanto para sua equipe quanto para os alunos. Um sistema complexo pode gerar resistência e diminuir a produtividade.</p>

      <h2>3. Suporte técnico</h2>
      <p>Certifique-se de que o fornecedor oferece um bom suporte técnico, com atendimento rápido e eficiente.</p>
    `,
    date: '15 Mar 2024',
    category: 'MvK Gym Manager',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200',
    author: 'Equipe MvK Devs'
  },
  'cardapio-digital-aumentar-vendas': {
    slug: 'cardapio-digital-aumentar-vendas',
    title: 'Como um cardápio digital pode aumentar suas vendas',
    content: `
      <p>O cardápio digital é mais do que uma tendência - é uma necessidade para restaurantes que querem se manter competitivos no mercado atual.</p>

      <h2>Vantagens do cardápio digital</h2>
      <ul>
        <li>Atualização em tempo real de preços e disponibilidade</li>
        <li>Fotos atrativas dos pratos</li>
        <li>Integração com sistemas de pedido</li>
        <li>Análise de dados de vendas</li>
      </ul>

      <h2>Implementação estratégica</h2>
      <p>A implementação deve ser planejada para garantir uma transição suave e aceitação dos clientes.</p>
    `,
    date: '10 Mar 2024',
    category: 'MvK Cardápio',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200',
    author: 'Equipe MvK Devs'
  },
  'otimizacao-seo-2024': {
    slug: 'otimizacao-seo-2024',
    title: 'Tendências de SEO para 2024',
    content: `
      <p>O SEO está em constante evolução, e 2024 traz novas tendências e desafios para os profissionais de marketing digital.</p>

      <h2>Principais tendências</h2>
      <ul>
        <li>IA na criação de conteúdo</li>
        <li>Otimização para busca por voz</li>
        <li>Core Web Vitals</li>
        <li>Conteúdo E-E-A-T</li>
      </ul>

      <h2>Estratégias recomendadas</h2>
      <p>Para se manter competitivo, é essencial adaptar sua estratégia de SEO às novas tendências do mercado.</p>
    `,
    date: '5 Mar 2024',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=1200',
    author: 'Equipe MvK Devs'
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="bg-dark text-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para o blog
        </Link>
        
        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="mb-8">
            <span className="text-sm text-blue-400">{post.category}</span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-400 text-sm">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}