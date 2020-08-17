import React from 'react'

import './Organic.css'
import OrganicLogo from '../../assets/Organic.png'
import ButtonLink from '../ButtonLink';

function Organic() {
  return (
    <ButtonLink className="ButtonOrganic" to='/'>
      <h5>Desenvolvido com ReactJS pela <img className="Organic" src={OrganicLogo} />Organic</h5>
    </ButtonLink>
  );
}

export default Organic;
