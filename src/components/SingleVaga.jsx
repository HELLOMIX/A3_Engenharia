import React from 'react'
import { Link } from 'react-router-dom'

const ListaVagas = ({id, titulo, descricao, localizacao, salario, contrato, carga, funcao, empresa}) => {
  return (
    <Link to={`/vaga/${id}`} className='vaga-item'>
      <div className='vaga-item'>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <p><strong>Localização:</strong> {localizacao}</p>
        <p><strong>Salário:</strong> R$ {salario}</p>
        <p><strong>Contrato:</strong> {contrato}</p>
        <p><strong>Carga Horária:</strong> {carga}</p>
        <p><strong>Função:</strong> {funcao}</p>
        <p><strong>Empresa:</strong> {empresa}</p>
      </div>
    </Link>
  )
}

export default ListaVagas