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
       <h2>Acompanhe a Sett nas Redes Socias</h2>
       <SocialLinks style13={{  marginLeft: 10, height: 50, width: 50 }} style2={{  marginLeft: 10, height: 50, width: 50 }}/>
      </div>
     <Footer />
    </div>
  )
}

export default Contato