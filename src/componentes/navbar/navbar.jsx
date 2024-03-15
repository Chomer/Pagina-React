
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
