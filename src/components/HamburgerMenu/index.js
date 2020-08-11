import React from 'react'

import './HamburgerMenu.css'
import ButtonLink from '../ButtonLink'

function HamburgerMenu(){
    return(
        <div className="HamburgerMenu">
              <div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><ButtonLink className="HamMenu" to='/treinamentos'>
                <h3>Treinamentos</h3>
            </ButtonLink></li>
            <li><ButtonLink className="HamMenu" to="/ondeestamos">
                <h3>Onde Estamos</h3>
            </ButtonLink></li>
            <li><ButtonLink className="HamMenu" to="/serviços">
                <h3>Serviços</h3>
            </ButtonLink></li>
            <li><ButtonLink className="HamMenu" to="/contato">
                <h3>Contato</h3>
            </ButtonLink></li>
          </ul>
        </div>
    </div>
    </div>
    </div>
   
 
        </div>
    )
}

export default HamburgerMenu
