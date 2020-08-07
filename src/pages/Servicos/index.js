import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../Pages.css'

function Servicos() {
  return (
    <div className="Page">
     <Header />
     <div className="Primary">
     <h2 className="Title">Serviços</h2>
     <div className='Secundary'>
     <div className="Box"><h4 className="Title">PPRA</h4><br></br><h4>Breve descrição</h4></div>
     <div className="Box"><h4 className="Title">PCMSO</h4></div>
     <div className="Box"><h4 className="Title">E-Social</h4></div>
     </div>
     </div>
     <Footer />
    </div>
  )
}

export default Servicos
