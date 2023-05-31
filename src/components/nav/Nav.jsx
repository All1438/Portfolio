import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BiBook} from 'react-icons/bi'
import {RiMessage2Line, RiServiceLine, RiAccountPinCircleLine} from 'react-icons/ri'
import {useState} from 'react' // hook

const Nav = () => {
  const [state, setState] = useState("#header") // useState() est la valeur par defaut de stat
  return (
    <nav>
      <a href="#header" onClick={() => setState("#header")} className={state === "#header" ? "active" : " "}><GoHome/ ></a> {/*state est utiliser pour la  verification */}
      <a href="#about" onClick={() => setState("#about")} className={state === "#about" ? "active" : " "}><RiAccountPinCircleLine/ ></a>
      <a href="#experience" onClick={() => setState("#experience")} className={state === "#experience" ? "active" : " "}><BiBook/ ></a>
      <a href="#portfolio" onClick={() => setState("#portfolio")} className={state === "#portfolio" ? "active" : " "}><RiServiceLine/ ></a>
      <a href="#contact"onClick={() => setState("#contact")} className={state === "#contact" ? "active" : " "}><RiMessage2Line/ ></a>
    </nav>
  )
}

export default Nav