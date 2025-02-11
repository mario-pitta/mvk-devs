import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'como-escolher-sistema-gestao-academia',
    title: 'Como escolher o melhor sistema de gestão para sua academia',
    excerpt: 'Descubra os principais fatores a considerar na hora de escolher um software para gerenciar sua academia.',
    date: '15 Mar 2024',
    category: 'MvK Gym Manager',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500'
  },
  {
    slug: 'cardapio-digital-aumentar-vendas',
    title: 'Como um cardápio digital pode aumentar suas vendas',
    excerpt: 'Aprenda como implementar um cardápio digital e aumentar o faturamento do seu restaurante.',
    date: '10 Mar 2024',
    category: 'MvK Cardápio',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500'
  },
  {
    slug: 'otimizacao-seo-2024',
    title: 'Tendências de SEO para 2024',
    excerpt: 'Conheça as principais estratégias de SEO para destacar seu site nos mecanismos de busca.',
    date: '5 Mar 2024',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=500'
  }
];

export default function Blog() {
  return (
    <div className="bg-dark text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-flow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Blog MvK Devs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Conteúdo relevante sobre tecnologia e inovação
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="gradient-border bg-dark-lighter p-6 hover-gradient transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="text-sm text-blue-400">{post.category}</span>
                <h2 className="text-xl font-bold mb-2 mt-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}