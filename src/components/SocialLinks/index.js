import React from 'react'
import { FiInstagram, FiFacebook, FiPhoneCall } from 'react-icons/fi'

import './SocialLinks.css'

function SocialLinks(props) {
  return (
    <div className="SocialLinks">
      <a className="SocialLink" href="http://facebook/"><FiFacebook style={{ color: "var(--secundary)" }} size={props.size}/></a>
      <a className="SocialLink" href="http://instagram/"><FiInstagram style={{ color: "var(--secundary)" }} size={props.size}/></a>
      <a className="SocialLink" href="http://whatsapp/"><FiPhoneCall style={{ color: "var(--secundary)" }} size={props.size}/></a>
    </div>
  );
}

export default SocialLinks;
