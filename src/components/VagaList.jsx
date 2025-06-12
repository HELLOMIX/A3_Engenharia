import React from 'react'
import SingleVaga from './SingleVaga'
import { Link, useLocation } from 'react-router-dom'

const VagaList = ({ title, items, itemsArray, path, idPath }) => {

    const location = useLocation();
    const isHome = location.pathname === '/';
    const finalVagas = isHome ? items : Infinity;

    return (
      <div className='item-list'>
        <h2 className='item-list__title'>{title}</h2>
        <div className='item-list__container'>
          {finalVagas.map((vaga, index) => (
            <Link to={`${path}/${vaga[idPath]}`} key={index} className='item-list__link'>
              <SingleVaga
                id={vaga[idPath]}
                titulo={vaga.titulo}
                descricao={vaga.descricao}
                localizacao={vaga.localizacao}
                salario={vaga.salario}
                contrato={vaga.contrato}
                carga={vaga.carga}
                funcao={vaga.funcao}
                empresa={vaga.empresa}
              />
            </Link>
          ))}
        </div>
      </div>
    )
}

export default VagaList