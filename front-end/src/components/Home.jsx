import React from 'react'
import placeholderProfilePicture from '../assets/images/placeholderProfilePicture.png'
import logoAnima from '../assets/images/logoAnima.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='coluna1'>
            <div className='nav-lateral'>
                <nav>
                    <img src={logoAnima} alt="Logo da Anima" />
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <Link to="/curriculo"><li><a>Meu Curriculo</a></li></Link>
                        <li><a href="/vagas">Vagas</a></li>
                        <li><a href="/Contrato">Contrato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='coluna2'>
            <div className='top-container'>
                <p>qualquer coisa</p>
            </div>
            <div className='linha1'>
                <div className='info-aluno'>
                    <div className='img-aluno'>
                        <img src={placeholderProfilePicture} alt="Foto do Aluno" />
                    </div>
                    <div className='text-info-aluno'>
                        <h2>Olá, Aluno</h2>
                        <p>E-mail: teste@teste.com</p>
                        <p>Localização: teste - teste, 00</p>
                        <p>Telefone: 00000-0000</p>
                    </div>
                </div>
                <div className='info-conquista'>
                    <h1>Minhas conquistas</h1>
                    <p>Formação: Ciência da Computação</p>
                    <p>Cursos e certificados: Não informado</p>
                    <p>Empresas trabalhadas: Não informado</p>
                </div>
            </div>
            <div className='linha2'>
                <div className='meu-perfil'>
                    <h1>Meu Perfil</h1>
                    <div className='caixa-group'>
                        <div className='caixa1'>
                            <h3>placehoder title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Doloribus excepturi numquam molestias reprehenderit 
                                recusandae quisquam sequi eum mollitia itaque, ad esse 
                                aut ea explicabo vitae officiis voluptate, aperiam sunt quos.
                            </p>
                            <p id='aviso'>Não Disponível</p>
                        </div>
                        <div className='caixa2'>
                            <h3>placehoder title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Doloribus excepturi numquam molestias reprehenderit 
                                recusandae quisquam sequi eum mollitia itaque, ad esse 
                                aut ea explicabo vitae officiis voluptate, aperiam sunt quos.
                            </p>
                            <p id='aviso'>Não Disponível</p>
                        </div>
                        <div className='caixa3'>
                            <h3>placehoder title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Doloribus excepturi numquam molestias reprehenderit 
                                recusandae quisquam sequi eum mollitia itaque, ad esse 
                                aut ea explicabo vitae officiis voluptate, aperiam sunt quos.
                            </p>
                            <p id='aviso'>Não Disponível</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='linha3'>
                <div id="job-listings" class="job-listings"></div>
                <div class="button-container">
                    <button class="see-more-button">Ver mais</button>
                </div>
            </div>
            <script src="script.js"></script>
        </div>
    </div>
  )
}

export default Home