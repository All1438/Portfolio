import React from 'react'
import "./about.css"
import Me from '../../assets/Me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
      <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About_picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/ >
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/ >
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className='about__icon'/ >
              <h5>Projets</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit modi nihil nostrum porro iusto recusandae hic atque vero totam culpa laborum numquam aperiam eos, sunt iste nobis assumenda labore voluptas.</p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default about