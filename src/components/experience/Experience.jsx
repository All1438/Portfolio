import React from 'react'
import './experience.css'
import {SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiDjango, SiFastapi} from 'react-icons/si'
import {FaReact, FaPython} from 'react-icons/fa'

const dataF = [
  {
    name: 'HTML',
    level: 'Experienced',
    Icon: SiHtml5
  },
  {
    name: 'CSS',
    level: 'Experienced',
    Icon: SiCss3
  },
  {
    name: 'Tailwind',
    level: 'Intermediate',
    Icon: SiTailwindcss
  },
  {
    name: 'JavaScript',
    level: 'Intermediate',
    Icon: SiJavascript
  },
  {
    name: 'React Js',
    level: 'Intermediate',
    Icon: FaReact
  }
]

const dataB = [
  {
    name: 'Python',
    level: 'Basic',
    Icon: FaPython
  },
  {
    name: 'Django',
    level: 'Intermediate',
    Icon: SiDjango
  },
  {
    name: 'FastAPI',
    level: 'Intermediate',
    Icon: SiFastapi
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            {
            dataF.map(({name, level, Icon}, index) => {
              return (
              <article className="experience__detail" key={index}>
                {Icon && <Icon className='experience__details-icon'/ >} 
                {/* permet d'utiliser l'icon en composants JSX, et le mettre en majuscule */}
                <div>
                  <h4>{name}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
              )
            })
            }
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            {
              dataB.map(({name, level, Icon}, index) => {
                return(
                  <article className="experience__detail" key={index}>
                    <Icon className='experience__details-icon'/ >
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience