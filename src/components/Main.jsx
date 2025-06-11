import React from "react";

const Main = ({ type }) => {
    return (
        <div className="main-container">
            <div className="login-container">
                <form className="login-form" action="/login" method="POST">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div className="input-group">
                        <label for="password">Senha:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Entrar</button>
                    <p className="forgot-password"><a href="#">Esqueceu a senha?</a></p>
                </form>
            </div>
        </div>
    );
};

export default Main;