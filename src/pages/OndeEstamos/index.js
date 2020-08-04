import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Map from '../../components/Map'

import '../Pages.css'

function OndeEstamos() {
  return (
    <div className="Page">
     <Header />
     <div className='Primary'>
       <h2 className="Title">Localização</h2>
       <Map />
      </div>
     <Footer />
    </div>
  )
}

export default OndeEstamos
