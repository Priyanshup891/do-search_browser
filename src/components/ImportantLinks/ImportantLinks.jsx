import React from 'react';
import './importantLinks.css';

import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import twitter from '../../assets/images/twitter.png';
import whatsapp from '../../assets/images/whatsapp.png';
import youtube from '../../assets/images/youtube.png';

import {GrFormAdd} from 'react-icons/gr';

const ImportantLinks = () => {

  return (
    <ul className='ImportantLinks__container'>
        <li><a href="https://www.facebook.com/"><img src={facebook} alt="facebook"/></a></li>
        <li><a href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a></li>
        <li><a href="https://in.linkedin.com/"><img src={linkedin} alt="linkedin"/></a></li>
        <li><a href="https://twitter.com/"><img src={twitter} alt="twitter"/></a></li>
        <li><a href="https://web.whatsapp.com/"><img src={whatsapp} alt="whatsapp"/></a></li>
        <li><a href="https://www.youtube.com/"><img src={youtube} alt="youtube"/></a></li>
    </ul>
  )
}

export default ImportantLinks