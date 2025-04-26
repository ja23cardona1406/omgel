import React from 'react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 bg-gray-900/60 backdrop-blur-sm border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AR Filter Tester
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Powered by Snapchat Lens Studio
          </p>
        </div>
      </Container>
    </footer>
  );
};