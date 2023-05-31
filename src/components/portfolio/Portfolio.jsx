import React from 'react'
import './portfolio.css'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
// import Swiper Style
import 'swiper/css'
// import Style spécialisée
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import IMG1 from '../../assets/Portfolio.png'
import IMG2 from '../../assets/Discord_Lite.png'
import IMG3 from '../../assets/Note_App.png'
import IMG4 from '../../assets/coming_soon.png'

const data = [
  {
    image: IMG2,
    title: 'Discord Lite',
    langage: '(Django)',
    classN: 'img__discord',
    url: 'https://github.com/All1438/DiscordLite__Django'
  },
  {
    image: IMG1,
    title: 'Portfolio',
    langage: '(React Js)',
    url: 'https://github.com/All1438/Portfolio',
    classN: 'img__portfolio'
  },
  {
    image: IMG3,
    title: 'Note App',
    langage: '(Django-React)',
    url: 'https://github.com/All1438/NoteApp-Django-React',
    classN: 'img__note'
  },
  {
    image: IMG4,
    title: 'Comming Soon',
    classN: 'img__soon'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <Swiper className="portfolio__container"
      // l'import doit être dans la balise Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={1000}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      >
      {
        data.map(({image, title, langage, url}, index) => { // On utilise index ici au lieu de id
          return(
            <SwiperSlide key={index}>
              <div className="portfolio__item">
                  <div className="portfolio__item-title">
                    <h3 className="text__light">{title} <span className="text__light">{langage}</span></h3>
                  </div>
                  <div className="portfolio__item-img">
                    <a href={url} target="_blank" rel="noreferrer">
                     <img src={image} alt={title} className='img' />
                    </a>
                  </div>
              </div>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio