import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from 'infinite-react-carousel'

import um from '../../assets/banners/um.png'
import dois from '../../assets/banners/dois.png'

import ummobile from '../../assets/banners/ummobile.png'
import doismobile from '../../assets/banners/doismobile.png'

import '../Pages.css'

function Home() {
  return (
    <div className="Page">
     <Header />
     <div className='Primary'>
       <Slider className="Desktop" dots>
        <div>
          <img src={um}></img>
        </div>
        <div>
        <img src={dois}></img>
        </div>
        </Slider>
        <Slider className="Mobile" dots>
        <div>
          <img src={ummobile}></img>
        </div>
        <div>
        <img src={doismobile}></img>
        </div>
        </Slider>
      </div>
     <Footer />
    </div>
  )
}

export default Home
