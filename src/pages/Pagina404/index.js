import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../Pages.css'

function Pagina404() {
  return (
    <div className="Page">
     <Header />
     <div className='Primary'>
       <h2 className="Title">404: Não Encontrada</h2>
     </div>
     <Footer />
    </div>
  )
}

export default Pagina404
