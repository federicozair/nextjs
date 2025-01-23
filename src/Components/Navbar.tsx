import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="hidden lg:block"> 
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="/">INICIO</Link> 
          <Link className="navbar_link relative" href="/">OFERTAS</Link> 
          <Link className="navbar_link relative" href="/">PANTALONES</Link> 
          <Link className="navbar_link relative" href="/">REMERAS</Link> 
          <Link className="navbar_link relative" href="/">ADMIN</Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;

