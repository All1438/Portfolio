import React from 'react'
import {BsGithub, BsFacebook} from 'react-icons/bs' // permet d'importer les icons de FB et Git

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/nando.ali.140/" target="_blank" rel="noreferrer">Facebook <BsFacebook/ ></a> {/*permet d'inserer les icons*/}
        <a href="https://github.com/All1438" target="_blank" rel="noreferrer">GitHub <BsGithub/ ></a>
    </div>
  )
}

export default HeaderSocials