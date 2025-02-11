import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GymManager from './pages/GymManager';
import Cardapio from './pages/Cardapio';
import WebDevelopment from './pages/WebDevelopment';
import SocialMedia from './pages/SocialMedia';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App