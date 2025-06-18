import React from 'react'

const CadastroVaga = () => {
  return (
    <div  className="cadastro-vaga-page">
        <div className="cadastroVaga-container">
            <form className="cadastroVaga-form" action="/cadastroVaga" method="POST">
                <h2>Cadastro Vagas</h2>
                <div className="input-group">
                    <div className='input-group-container'>
                        <div  className='input-group1'>
                            <label htmlFor="titulo">Título da Vaga:</label>
                            <input type="text" id="titulo" name="titulo" required />

                            <div className='descricao-group'>
                                <label htmlFor="descricao">Descrição da Vaga:</label>
                                <textarea textarea id="descricao" name="descricao" required></textarea>
                            </div>

                            <label htmlFor="localizacao">Localização:</label>
                            <input type="text" id="localizacao" name="localizacao" required />

                            <label htmlFor="salario">Salário:</label>
                            <input type="number" id="salario" name="salario" required />
                        </div>

                        <div className='input-group2'>
                            <div className='select-group'>
                                <label htmlFor="tipoContrato">Tipo de Contrato:</label>
                                <select id="tipoContrato" name="tipoContrato" required>
                                    <option value="Estágio">Estágio</option>
                                    <option value="Traine">Traine</option>
                                </select>

                                <label htmlFor="tipoCarga">Tipo de Carga Horária:</label>
                                <select id="tipoCarga" name="tipoCarga" required>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Híbrido">Híbrido</option>
                                    <option value="Remoto">Remoto</option>
                                </select>

                                <label htmlFor="tipoFuncao">Tipo de Função:</label>
                                <select name="tipoFuncao" id="tipoFuncao" required>
                                    <option value="Desenvolvimento">Desenvolvimento</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Vendas">Vendas</option>
                                    <option value="Recursos Humanos">Recursos Humanos</option>
                                    <option value="Financeiro">Financeiro</option>
                                </select>
                            </div>
                            <label htmlFor="empresa">Empresa:</label>
                            <input type="text" id="empresa" name="empresa" required />
                        </div>
                    </div>
                    <button type="submit">Cadastrar Vaga</button>
                </div>        
            </form>
        </div>
        <div className='cadastro-vaga-text'>
          <h1 id='text1'>Faça o Cadastro em nossa</h1>
          <h1 id='text2'>Plataforma</h1>
        </div>
    </div>
  )
}

export default CadastroVaga