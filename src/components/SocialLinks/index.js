import React from 'react'
import { FiInstagram, FiFacebook, FiPhoneCall } from 'react-icons/fi'

import './SocialLinks.css'

function SocialLinks(props) {
  return (
    <div className="SocialLinks">
      <a className="SocialLink" href="https://www.facebook.com/sett.seg"><FiFacebook style={{ color: "var(--primary)" }} size={props.size}/></a>
      <a className="SocialLink" href="https://www.instagram.com/sett.seg"><FiInstagram style={{ color: "var(--primary)" }} size={props.size}/></a>
      <a className="SocialLink" href="https://api.whatsapp.com/send?phone=5545999256754&text="><FiPhoneCall style={{ color: "var(--primary)" }} size={props.size}/></a>
    </div>
  );
}

export default SocialLinks;
