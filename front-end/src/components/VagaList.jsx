import React from 'react'
import SingleVaga from './SingleVaga'
import { useLocation } from 'react-router-dom'

const VagaList = ({ title, items, itemsArray, idPath }) => {

    const location = useLocation();
    const isHome = location.pathname === '/';
    const finalVagas = isHome ? items : Infinity;

    return (
      <div className='item-list'>
        <h2 className='item-list__title'>{title}</h2>
        <div className='item-list__container'>
          {itemsArray
            .filter((currentValue, index) => index < finalVagas)
            .map((vaga, index) => (
              <SingleVaga
                {...vaga}
                idPath={idPath}
                key={`${vaga.id}-${index}`}
              />
          ))}
        </div>
      </div>
    )
}

export default VagaList