import React from 'react'
import Iframe from 'react-iframe'
import './Map.css'
 
function Map() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.3467184439224!2d-53.50520117081351!3d-24.952948783081762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d1338e47fb2d%3A0x54839a10d5a4f1bd!2sR.%20Coroados%2C%20564%20-%20Santa%20Cruz%2C%20Cascavel%20-%20PR%2C%2085806-100!5e0!3m2!1spt-BR!2sbr!4v1596768338056!5m2!1spt-BR!2sbr" />
    </div>
    );
  }
 
export default Map;