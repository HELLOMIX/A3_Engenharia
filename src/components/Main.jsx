import React from "react";

const Main = ({ type }) => {
    return (
        <div className="main-container">
            {type === "login" ? (
                <div className="login-container">
                    <form className="login-form" action="/login" method="POST">
                        <h2>Login</h2>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Entrar</button>
                        <p className="forgot-password"><a href="#">Esqueci minha senha</a></p>
                    </form>
                </div>
            ) : (
            <></>
            )}

            {type === "cadastroEmpresa" ? (
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
                        <button type="submit">Cadastrar</button>
                        <p className="forgot-password"><a href="#">Já tem uma conta? Faça login</a></p>
                    </form>
                </div>
            ) : (<></>
            )}
        </div>
    );
};

export default Main;