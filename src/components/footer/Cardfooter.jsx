import React from 'react'
import './Cardfooter.css'
import {FaFacebookF} from 'react-icons/fa' 
import {FiInstagram} from 'react-icons/fi'
import logo from '../../assets/logo.png';

const footer = () => {
  return (
    <footer>
        <a href="#"><img src={logo} style={{ width: '130px', height: 'auto' }} />Darul Musthafa</a>

        <ul className='permalinks'>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#kegiatan">Kegiatan</a></li>
            <li><a href="#contact">Kontak</a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.facebook.com/people/Darul-Musthafa-Solo/100063505853570/?locale=id_ID"><FaFacebookF/></a>
        <a href="https://www.instagram.com/darulmusthafa/?hl=en"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Copy Rights Darul Musthafa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer