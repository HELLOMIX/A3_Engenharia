import React from 'react'
import BarraNav from './BarraNav'
import curriculoImg from '../assets/images/curriculo.png'

const Curriculo = () => {
  return (
    <div className='page-curriculo'>
        <div className='coluna1'>
            <BarraNav />
        </div>
        <div className='coluna2'>
            <div className='areaFoto'>
                <div className='foto'>
                    <div className='linha1'>
                        <img src={curriculoImg} alt="" />
                    </div>
                    <div className='linha2'>
                        <p>Página 1 de 3</p>
                        <button>Donwload</button>
                    </div>
                </div>
                <div className='areaBotao'>
                    <button>Enviar Curriculo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Curriculo