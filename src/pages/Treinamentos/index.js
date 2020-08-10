import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../Pages.css'

function Treinamentos() {
  return (
    <div className="Page">
     <Header />
     <div className="Primary">
     <h2 className="Title">Treinamentos</h2>
     <div className='Secundary'>
     <div className="Box"><h4>CIPA (NR-05)</h4></div>
     <div className="Box"><h4>Trabalho em Altura (NR-35)</h4></div>
     <div className="Box"><h4>Uso de EPIs (NR-06)</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>Brigada de Incêndio (NPT-017 e NR-23)</h4></div>
     <div className="Box"><h4>Primeiros Socorros</h4></div>
     <div className="Box"><h4>Treinamento de Benzeno</h4></div>
     </div>
     <div className='Secundary'>
     <div className="Box"><h4>NR-20</h4></div>
     <div className="Box"><h4>NR-10</h4></div>
     <div className="Box"><h4>NR-18</h4></div>
     </div>
    </div>
     <Footer />
    </div>
  )
}

export default Treinamentos
