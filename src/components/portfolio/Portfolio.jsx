import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio.png'
import IMG2 from '../../assets/coming_soon.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Coming Soon'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Coming Soon'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio