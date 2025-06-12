import React from 'react'

const Login = () => {
  return (
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
  )
}

export default Login