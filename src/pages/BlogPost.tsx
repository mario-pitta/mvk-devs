import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ContactButton from '../components/ContactButton';

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
  "como-escolher-sistema-gestao-academia": {
    slug: "como-escolher-sistema-gestao-academia",
    title: "Como escolher o melhor sistema de gestão para sua academia",
    content: `
 <div class="max-w-4xl mx-auto  p-8 rounded-lg shadow-md">
        <p class="text-lg mb-6">Gerenciar uma academia vai muito além do atendimento ao cliente. Um sistema de gestão eficiente pode automatizar processos, melhorar a experiência dos alunos e impulsionar os resultados financeiros do seu negócio.</p>
        
        <div class="flex justify-center mb-6">
            <img class="rounded-lg" src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Academia moderna com sistema digital">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Benefícios de um Sistema de Gestão para Academias</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Automatização de tarefas administrativas</strong> – Redução do tempo gasto com gestão manual.</li>
            <li><strong>Melhoria no atendimento ao aluno</strong> – Cadastro, planos e agendamentos acessíveis digitalmente.</li>
            <li><strong>Controle financeiro mais eficiente</strong> – Monitoramento de pagamentos, mensalidades e fluxo de caixa.</li>
            <li><strong>Engajamento e retenção de alunos</strong> – Programas de fidelidade e acompanhamento personalizado.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Impacto nos Negócios: Dados e Gráficos</h2>
        <p>Pesquisas indicam que academias que adotam sistemas de gestão digital observam um aumento médio de 30% na retenção de alunos.</p>
        <div class="flex justify-center mt-4 mb-6">
            <img class="rounded-lg" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gráfico sobre impacto dos sistemas de gestão em academias">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Casos de Sucesso</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>FitMax Academia</strong>: Adoção do sistema reduziu a inadimplência em 40% e otimizou o atendimento ao cliente.</li>
            <li><strong>PowerGym</strong>: Implementação do agendamento online resultou em uma taxa de ocupação 20% maior nas aulas coletivas.</li>
            <li><strong>Performance Fitness</strong>: Com automação de pagamentos, a taxa de retenção de alunos aumentou em 35%.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Como Implementar um Sistema de Gestão na sua Academia?</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Escolha um software intuitivo e de fácil integração com outros sistemas.</li>
            <li>Capacite sua equipe para utilizar a plataforma de forma eficiente.</li>
            <li>Utilize relatórios e métricas para aprimorar a experiência dos alunos.</li>
            <li>Ofereça opções de pagamento digital para maior conveniência.</li>
        </ul>
        
        <p class="mt-6 text-lg">Investir em um sistema de gestão para academias é um passo essencial para modernizar seu negócio e oferecer uma experiência diferenciada para seus alunos. <strong>Entre em contato com nossa equipe</strong> e descubra a melhor solução para sua academia.</p>
    </div>`,
    date: "15 Mar 2024",
    category: "MvK Gym Manager",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200",
    author: "Equipe MvK Devs",
  },
  "cardapio-digital-aumentar-vendas": {
    slug: "cardapio-digital-aumentar-vendas",
    title: "Como um cardápio digital pode aumentar suas vendas",
    content: `
    <div class="max-w-4xl mx-auto  p-8 rounded-lg shadow-md">
        <p class="text-lg mb-6">A tecnologia transformou a forma como os negócios operam, e o setor de alimentação não é exceção. Um cardápio digital pode ser a chave para atrair mais clientes e aumentar suas vendas de forma eficiente.</p>
        
        <div class="flex justify-center mb-6">
            <img class="rounded-lg" src="https://images.pexels.com/photos/9461218/pexels-photo-9461218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Exemplo de Cardápio Digital">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Vantagens de um Cardápio Digital</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Melhora a experiência do cliente</strong> – Navegação intuitiva e interativa.</li>
            <li><strong>Facilidade na atualização</strong> – Alterações rápidas sem custos extras.</li>
            <li><strong>Impulsiona pedidos e upselling</strong> – Recomendações automáticas aumentam o ticket médio.</li>
            <li><strong>Maior alcance</strong> – Acesso remoto facilita pedidos antecipados.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Impacto nos Negócios: Dados e Gráficos</h2>
        <p>Estudos mostram que a adoção de cardápios digitais pode aumentar as vendas em até 20%.</p>
        <div class="flex justify-center mt-4 mb-6">
            <img class="rounded-lg" src="https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gráfico de impacto do cardápio digital nas vendas">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Casos de Sucesso</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Restaurante Gourmet Express</strong>: Aumento de 25% nos pedidos e redução no tempo de atendimento.</li>
            <li><strong>Pizzaria Sabor & Arte</strong>: Crescimento de 18% nas vendas e maior satisfação do cliente.</li>
            <li><strong>Café Moderno</strong>: Ampliação da base de clientes em 30% com pedidos online.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Como Implementar um Cardápio Digital?</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Utilize QR Codes para acesso rápido e prático.</li>
            <li>Adote um design responsivo para dispositivos móveis.</li>
            <li>Integre com sistemas de pedidos online para otimizar o serviço.</li>
            <li>Personalize ofertas e promoções com base no comportamento do cliente.</li>
        </ul>
        
        <p class="mt-6 text-lg">Investir em um cardápio digital é uma maneira eficaz de modernizar seu negócio, aumentar suas vendas e melhorar a experiência do cliente. <strong>Entre em contato com nossa equipe</strong> e descubra como podemos ajudar você a implementar essa solução inovadora.</p>
    </div>
    `,
    date: "10 Mar 2024",
    category: "MvK Cardápio",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200",
    author: "Equipe MvK Devs",
  },
  "otimizacao-seo-2024": {
    slug: "otimizacao-seo-2024",
    title: "Otimização de SEO: Como Melhorar Seu Posicionamento Online",
    content: `
         <div class="max-w-4xl mx-auto p-8 rounded-lg shadow-md">
        
        <p class="text-lg mb-6">O SEO (Search Engine Optimization) é essencial para aumentar a visibilidade do seu site nos mecanismos de busca. Com estratégias bem aplicadas, é possível atrair mais visitantes e converter leads em clientes.</p>
        
        <div class="flex justify-center mb-6">
            <img class="rounded-lg" src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gráfico representando SEO e crescimento online">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Principais Fatores para um SEO Eficiente</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Palavras-chave estratégicas</strong> – Identificar e utilizar termos relevantes para o seu público-alvo.</li>
            <li><strong>Otimização de conteúdo</strong> – Produção de materiais ricos e relevantes.</li>
            <li><strong>Experiência do usuário (UX)</strong> – Sites rápidos, responsivos e intuitivos.</li>
            <li><strong>Backlinks de qualidade</strong> – Links externos que aumentam a autoridade do seu site.</li>
            <li><strong>SEO técnico</strong> – Estrutura correta de URLs, meta tags e sitemap.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Impacto do SEO nos Negócios</h2>
        <p>Sites otimizados para SEO recebem em média 50% mais tráfego orgânico e possuem maior taxa de conversão.</p>
        <div class="flex justify-center mt-4 mb-6">
            <img class="rounded-lg" src="https://dccomunic.com.br/wp-content/uploads/2023/08/Como-o-SEO-Pode-Aumentar-o-Trafego-do-Seu-Site.jpg" alt="Crescimento do tráfego com SEO">
        </div>
        
        <h2 class="text-2xl font-semibold text-blue-500 mb-4">Casos de Sucesso</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Loja Online XYZ</strong>: Após implementar SEO, aumentou o tráfego orgânico em 70% e dobrou suas vendas.</li>
            <li><strong>Blog de Tecnologia</strong>: Melhorou sua posição no Google e triplicou os acessos mensais.</li>
            <li><strong>Empresa de Serviços</strong>: Investiu em SEO local e obteve um crescimento de 40% nas conversões.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold text-blue-500 mt-6 mb-4">Como Aplicar SEO no Seu Negócio?</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Realize uma auditoria SEO para identificar pontos de melhoria.</li>
            <li>Produza conteúdos otimizados e de valor para seu público.</li>
            <li>Melhore a velocidade e responsividade do seu site.</li>
            <li>Construa uma estratégia de backlinks para fortalecer sua autoridade.</li>
        </ul>
        
        <p class="mt-6 text-lg">A otimização de SEO é um investimento indispensável para qualquer empresa que deseja crescer online.</p>
        
        <div class="p-6 rounded-lg text-center mt-6">
            <h3 class="text-xl font-semibold text-blue-600">Potencialize seu site com SEO!</h3>
            <p class="mt-2">Nossa equipe especializada pode ajudar a posicionar seu site no topo dos resultados de busca.</p>
     
        </div>
    </div>
`,
    date: "5 Mar 2024",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=1200",
    author: "Equipe MvK Devs",
  },
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
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
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
            className="prose mb-5 prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
            <ContactButton className="mt-4" product={post.category} />
        </article>
      </div>
    </div>
  );
}
