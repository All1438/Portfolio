import React from 'react'
import './portfolio.css'

import { Pagination, Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
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
    langage: '(Django)'
  },
  {
    image: IMG1,
    title: 'Portfolio',
    langage: '(React Js)'
  },
  {
    image: IMG3,
    title: 'Note App',
    langage: '(Django-React)'
  },
  {
    image: IMG4,
    title: 'Comming Soon'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <Swiper className="portfolio__container"
      modules={[Pagination, Navigation]}
      spaceBetween={1000}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      >
      {
        data.map(({image, title, langage}, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="portfolio__item">
                  <div className="portfolio__item-title">
                    <h3 className="text__light">{title} <span className="text__light">{langage}</span></h3>
                  </div>
                  <div className="portfolio__item-img">
                    <img src={image} alt={title} className='img' />
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