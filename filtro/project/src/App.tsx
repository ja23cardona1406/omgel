import React from 'react';
import { SnapchatLogo } from './components/SnapchatLogo';
import { Container } from './components/Container';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      <Container>
        <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center px-4">
          <SnapchatLogo className="w-16 h-16 md:w-20 md:h-20 mb-6 text-yellow-400" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            Probador de Filtros AR
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-700">
            <Button 
              href="https://lens.snapchat.com/9b3b5d4b-f2af-41b0-8335-4f90cc85eed0" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Probar Filtro en Snapchat
            </Button>
            
            <p className="mt-6 text-gray-400 text-sm">
              Necesitas tener Snapchat instalado para abrir el filtro.
            </p>
          </div>
        </div>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;