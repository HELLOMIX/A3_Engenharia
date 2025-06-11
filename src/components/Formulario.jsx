import React from 'react'

const Formulario = () => {
  return (
    <div className="main-container">
            <div className="cadastro-container">
                <form className="cadastro-form" action="/cadastro" method="POST">
                    <h2>cadastro</h2>
                    <div className="input-group">
                        <label for="nome">Nome da Empresa:</label>
                        <input type="text" id="nome" name="nome" required></input>
                    </div>
                    <div className="input-group">
                        <label for="cnpj">CNPJ:</label>
                        <input type="text" id="cnpj" name="cnpj" required></input>
                    </div>
                    <div className="input-group">
                        <label for="email">Email corporativo:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div className="input-group">
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Cadastrar</button>
                    <p className="forgot-password"><a href="#">Já tem uma conta? Faça login</a></p>
                </form>
            </div>
        </div>
  );
};

export default Formulario