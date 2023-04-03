import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/Me4.png'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='header__name'>RAKOTOARINIVO Ali Nando</h1>
        <h5 className='text-light'>UI/UX Designer & Web developer</h5>

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