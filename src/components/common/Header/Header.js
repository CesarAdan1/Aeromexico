import React from 'react'
import HarryPotter from '../../../static/assets/Harry.svg'
import './header.scss'

const Header = () => {
    return (
        <header className='head' data-testid="header">
             <nav className='head--highlight'>
                <h2 className='head--h2'>
                    <figure>
                        <img className="head--imag" src={HarryPotter} alt="Harry Potter" />
                    </figure>
                </h2>
                <h2 className='head--title'>Selecciona tu filtro</h2>
            </nav>
        </header>
    )
}


export default Header