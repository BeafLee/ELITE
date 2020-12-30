import React from 'react';
import { NavLink } from 'react-router-dom'
//import logo from "../img/logo.png";

export default function Header() {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top px-lg-2">
    
        <a className='navbar-brand' href="/">
          <i className="fas fa-home fa-lg d-inline-block mr-1" />
          {/* <span className='position-absolute'>ÉLITE</span> */}
        </a>
        <span className='navber-nav'>
          <div className='navbar-item'>
            <NavLink to='/reserve' className='btn btn-outline-warning btn-sm rounded-pill' activeClassName='btn btn-outline-dark btn-sm active' >Reserva aquí</NavLink>
          </div>
        </span>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#MenuLinks' aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>


        <div className='collapse navbar-collapse justify-content-end' id='MenuLinks'>
          <ul className='navbar-nav'>
            <li className='navbar-item'>
              <NavLink to='/local' className='nav-link'>Local</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to='/products' className='nav-link'>Productos</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to='/contact' className='nav-link'>Contáctanos</NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink to='/about' className='nav-link'>Sobre Nosotros</NavLink>
            </li>
          </ul>
        </div>

    </nav>
  )
};