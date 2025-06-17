import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" action="/login" method="POST">
            <div className='text-group'>
              <h2 id="texto1">Bem vindo ao</h2>
              <h2 id="texto2">Login</h2>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <Link to="/home">
              <button type="submit">Entrar</button>
            </Link>
              <p className="forgot-password"><a href="">Esqueci minha senha</a></p>
        </form>
      </div>
      <div className='login-text'>
        <h1 id='text1'>Faça Login em nossa</h1>
        <h1 id='text2'>Plataforma</h1>
      </div>
    </div>
  )
}

export default Login