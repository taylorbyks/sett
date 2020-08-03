import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks'

import LogoGray from '../../assets/LogoGray.png'
import  './Footer.css'

function Footer() {
  return (
    <div className="Footer">
      <Link to='/'>
        <img className="LogoSmall" src={LogoGray} alt="Sett Logo Gray" />
      </Link>
      <SocialLinks className="SocialFooter" style13={{ height: 30, width: 30 }} style2={{ height: 30, width: 30, marginLeft: 10, marginRight: 10 }}/>
      <p>
        Sett - Segurança do Trabalho e Treinamentos<br></br>
        CNPJ: 26.230.801/0001-37
      </p>
    </div>
  );
}

export default Footer;
