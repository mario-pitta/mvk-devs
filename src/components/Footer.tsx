import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">MvK Devs</h3>
            <p className="text-gray-400">
              Soluções tecnológicas inovadoras para impulsionar seu negócio.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Contato</h3>
            <div className="space-y-2">
              <a href="mailto:contato@mvkdevs.com.br" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5 mr-2" />
                contato@mvkdevs.com.br
              </a>
              <a href="tel:+5511999999999" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 mr-2" />
                (11) 99999-9999
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                São Paulo, SP
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MvK Devs. Todos os direitos reservados.</p>
        </div>
       </div>
    </footer>
  );
}