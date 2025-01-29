import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="/">INICIO</Link> 
          <Link className="navbar_link relative" href="/ofertas">OFERTAS</Link>  {/* Enlace para OFERTAS */}
          <Link className="navbar_link relative" href="/products/pantalones">PANTALONES</Link>
          <Link className="navbar_link relative" href="/products/remeras">REMERAS</Link> {/* Enlace para REMERAS */}
          <Link className="navbar_link relative" href="/admin">ADMIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
