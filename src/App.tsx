import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GymManager from './pages/GymManager';
import Cardapio from './pages/Cardapio';
import WebDevelopment from './pages/WebDevelopment';
import SocialMedia from './pages/SocialMedia';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym-manager" element={<GymManager />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;