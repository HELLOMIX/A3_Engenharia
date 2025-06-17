import React from 'react'

const Curriculo = () => {
  return (
    <div className='page-curriculo'>
        <form action="" className='form-curriculo'>
            <h1>Crie seu Currículo</h1>
            <div className='input-group'>
                <div className='curriculo-group1'>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />

                    <label htmlFor="endereco">Endereço:</label>
                    <input type="text" id='endereco' name='endereco' required />

                    <label htmlFor="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" required />

                    <label htmlFor="adicional">Adicional:</label>
                    <textarea name="adicional" id="adicional"></textarea>
                </div>
                <div className='curriculo-group2'>
                    <label htmlFor="areas-de-interesse">Áreas de interesse:</label>
                    <textarea name="areas-de-interesse" id="areas-de-interesse"></textarea>
                </div>
                <div className='curriculo-group3'>
                    <label htmlFor="formacao-academica">Formação Academica:</label>
                    <textarea name="formacao-academica" id="formacao-academica"></textarea>
                </div>
                <div className='curriculo-group4'>
                    <label htmlFor="experiencia-profissional">Experiência Profissional:</label>
                    <textarea name="experiencia-profissional" id="experiencia-profissional"></textarea>
                </div>
                <div className='curriculo-group5'>
                    <label htmlFor="habilidades">Habilidades Técnicas:</label>
                    <textarea name="habilidades" id="habilidades"></textarea>
                </div>
                <div className='curriculo-group6'>
                    <label htmlFor="idiomas">Idiomas:</label>
                    <textarea name="idiomas" id="idiomas"></textarea>
                </div>
                <div className='curriculo-group7'>
                    <label htmlFor="certificacoes">Certificações:</label>
                    <textarea name="certificacoes" id="certificacoes"></textarea>
                </div>
                <div className='curriculo-group8'>
                    <label htmlFor="informacoes-adicionais">Informações Adicionais:</label>
                    <textarea name="informacoes-adicionais" id="informacoes-adicionais"></textarea>
                </div>

                <button type="submit">Enviar Currículo</button>
            </div>
        </form>
    </div>
  )
}

export default Curriculo