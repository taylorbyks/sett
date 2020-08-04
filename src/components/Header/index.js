import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../ButtonLink'

import Logo from '../../assets/Logo.png'
import './Header.css'

function Header(){
    return(
        <nav className="Header">
            <Link to='/'>
                <img className="Logo" src={Logo} alt="Sett Logo" />
            </Link>
    
            <ButtonLink className="Button" to='/sobre'>
                Sobre
            </ButtonLink>

            <ButtonLink className="Button" to="/ondeestamos">
                Onde Estamos
            </ButtonLink>

            <ButtonLink className="Button" to="/serviços">
                Serviços
            </ButtonLink>

            <ButtonLink className="Button" to="/contato">
                Contato
            </ButtonLink>
        </nav>
    )
}

export default Header