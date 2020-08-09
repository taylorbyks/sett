import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../ButtonLink'

import Logo from '../../assets/Logo.png'
import './Header.css'
import HamburgerMenu from '../HamburgerMenu'

function Header(){
    return(
            
            <nav className="Header">
            <HamburgerMenu />
            
            <Link to='/'>
                <img className="Logo" src={Logo} alt="Sett Logo" />
            </Link>
    
            <ButtonLink className="Button" to='/sobre'>
                <h3>Sobre</h3>
            </ButtonLink>

            <ButtonLink className="Button" to="/ondeestamos">
                <h3>Onde Estamos</h3>
            </ButtonLink>

            <ButtonLink className="Button" to="/serviços">
                <h3>Serviços</h3>
            </ButtonLink>

            <ButtonLink className="Button" to="/contato">
                <h3>Contato</h3>
            </ButtonLink>
        </nav>
    )
}

export default Header