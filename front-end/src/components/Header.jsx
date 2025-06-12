import React from 'react'
import logoAnima from '../assets/images/logoAnima.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='header__link'>
          <img src={logoAnima} alt="" />
        </Link>
        <Link to="/cadastro-empresa" className='header__link'>
          <h1>Cadastre sua empresa</h1> 
        </Link>
    </div>
  );
};

export default Header