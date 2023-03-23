import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/Me4.png'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>RAKOTOARINIVO Ali Nando</h1>
        <h5 className='text-light'>Développeur Full-Stack</h5>

        <CTA/ >
        <HeaderSocials/ >

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header