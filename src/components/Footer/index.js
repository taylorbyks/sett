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
      <SocialLinks className="SocialLinks"/>
      <p>
        Sett - Segurança do Trabalho e Treinamentos<br></br>
        CNPJ: 26.230.801/0001-37<br></br>
        <b>(45) 99925-6754</b>
      </p>
    </div>
  );
}

export default Footer;
