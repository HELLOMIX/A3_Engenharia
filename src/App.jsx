import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="login-container">
        <form class="login-form" action="/login" method="POST">
            <h2>Login</h2>
            <div class="input-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div class="input-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">Entrar</button>
            <p class="forgot-password"><a href="#">Esqueceu a senha?</a></p>
        </form>
    </div>
    </>
  )
}

export default App
