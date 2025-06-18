import React from 'react'
import Main from '../components/Main'
import { useParams } from 'react-router-dom'
import repositoryVagas from "../../api/api.js";

const Vaga = () => {

  const { id } = useParams()
  const { titulo, descricao, localizacao, salario, tipo_contrato, tipo_carga_horaria, tipo_funcao, empresa } = 
  repositoryVagas.getVagaById(id);

  return (
    <Main type="vaga" />
  )
}

export default Vaga