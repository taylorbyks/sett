import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../ButtonLink'

import Logo from '../../assets/Logo.png'
import './Header.css'
import HamburgerMenu from 'react-hamburger-menu'
  
function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleButton = useCallback(
        () => setIsOpen(prevState => !prevState),
        [],
      )
    return(

            <nav className="Header">
            
            <HamburgerMenu className="HamburgerMenu"
                isOpen={isOpen}
                menuClicked={toggleButton}
                width={25}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='var(--primary)'
                borderRadius={0}
                animationDuration={0.5}
            ></HamburgerMenu>
            
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