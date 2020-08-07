import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../Pages.css'
import SocialLinks from '../../components/SocialLinks'

function Contato() {
  return (
    <div className="Page">
     <Header />
     <div className='Primary'>
       <h2 className="Title">Contato</h2>
       <div className="SecundaryC">
       <div className="Box">
          <h2>Whatsapp - Janaina: 45 99925-6754</h2>
       </div>
       <div className="Box">
          <h2>Email: sett.adm@hotmail.com</h2>
       </div>
       <div className="Box">
        <h2>Acompanhe a Sett nas Redes Socias</h2>
        <SocialLinks size={ 30 } />
       </div>
       </div>
       </div>
     <Footer />
    </div>
  )
}

export default Contato
