import React from 'react'

import './HamburgerMenu.css'


function HamburgerMenu(){
    return(
        <div className="HamburgerMenu">
            <input type="checkbox" id="checkbox-menu" />
            <label for="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}

export default HamburgerMenu