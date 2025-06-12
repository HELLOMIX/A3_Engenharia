import React from 'react'
import { Link } from 'react-router-dom'

const ListaVagas = ({ id, titulo, descricao, localizacao, salario, tipo_contrato, tipo_carga_horaria, tipo_funcao, empresa }) => {
  return (
    <Link to={`/vaga/${id}`} className='vaga-item'>
      <div className='vaga-item'>
        <div className='vaga-item__info'>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className='vaga-item__details'>
          <p><strong>Localização:</strong> {localizacao}</p>
          <p><strong>Salário:</strong> R$ {salario}</p>
          <p><strong>Contrato:</strong> {tipo_contrato}</p>
          <p><strong>Carga Horária:</strong> {tipo_carga_horaria}</p>
          <p><strong>Função:</strong> {tipo_funcao}</p>
          <p><strong>Empresa:</strong> {empresa}</p>
        </div>
      </div>
    </Link>
  )
}

export default ListaVagas