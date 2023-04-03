import React from 'react'
import './footer.css'
import {FaFacebook, FaInstagramSquare, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>SCARMAD</a>

      <ul className="permalinks">
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nando.ali.140/"><FaFacebook/ > </a>
        <a href="https://www.instagram.com/a.l.i.n.d.o.h/"><FaInstagramSquare/ ></a>
        <a href="https://github.com/All1438/"><FaGithub/ ></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SCARMAD </small> 
      </div>
    </footer>
  )
}

export default Footer