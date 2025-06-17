import React from 'react'
import logoAnima from '../assets/images/logoAnima.png'
import { Link } from 'react-router-dom';

const BarraNav = () => {
  return (
    <div className='nav-lateral'>
        <nav>
            <img src={logoAnima} alt="Logo da Anima" />
            <ul>
                <li><a href="/home">Home</a></li>
                <Link to="/curriculo"><li><a>Meu Curriculo</a></li></Link>
                <li><a href="/vagas">Vagas</a></li>
                <li><a href="/Contrato">Contrato</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default BarraNav