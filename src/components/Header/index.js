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
            
            <HamburgerMenu
                isOpen={isOpen}
                menuClicked={toggleButton}
                width={25}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='var(--primary)'
                borderRadius={0}
                animationDuration={0.5}
            > <ButtonLink className="Button" to='/sobre'>
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
        </ButtonLink></HamburgerMenu>
            

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