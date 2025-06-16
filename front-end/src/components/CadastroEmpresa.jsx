import React from 'react'

const CadastroEmpresa = () => {
  return (
    <div className="cadastro-page">
        <div className="cadastro-container">
            <form className="cadastro-form" action="/cadastroEmpresa" method="POST">
                <h2>Cadastro de Empresa</h2>
                <div className="input-group">
                    <label htmlFor="nome">Nome da Empresa:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div className="input-group">
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="text" id="cnpj" name="cnpj" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email corporativo:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <button type="submit">Cadastrar</button>
                <p className="forgot-password"><a href="#">Já tem uma conta? Faça login</a></p>
            </form>
        </div>
        <div className='cadastro-empresa-text'>
          <h1 id='text1'>Faça o Cadastro em nossa</h1>
          <h1 id='text2'>Plataforma</h1>
        </div>
    </div>
  )
}

export default CadastroEmpresa