import React from 'react'
import CV from '../../assets/CV.pdf'
import {BiDownload} from 'react-icons/bi'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" target='_blank ' rel='noreferrer' ><span>Download CV</span><BiDownload className='cta__icon'/ > </a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA