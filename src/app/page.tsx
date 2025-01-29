// Page.tsx
import React from 'react';
import Hero from '../Components/Hero'; // Si tienes el Hero en Components

const Page: React.FC = () => {
  return (
    <div>
      <Hero /> {/* Asegúrate de que Hero esté siendo mostrado aquí */}
    </div>
  );
};

export default Page;
