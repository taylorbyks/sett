import React from 'react'
import { SocialIcon } from 'react-social-icons'

import './SocialLinks.css'

function SocialLinks(props) {
  return (
    <div className="SocialLinks">
      <SocialIcon url="http://facebook/" style={ props.style13 } />
      <SocialIcon url="http://instagram/" style={ props.style2 } />
      <SocialIcon url="http://whatsapp/" style={ props.style13 } />
    </div>
  );
}

export default SocialLinks;
