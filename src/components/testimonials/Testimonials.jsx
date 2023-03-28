import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/gojo.jpg'
import AVTR2 from '../../assets/avatar.jpg'
import AVTR3 from '../../assets/aomine.jpg'
import AVTR4 from '../../assets/avatar2.jpg'
import AVTR5 from '../../assets/ayanokoji.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation'; pour la navigation
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar'; pouur la scrollbar


const data = [
  {
    image: AVTR1,
    name: 'Gojo',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quisquam quaerat voluptatum, rerum eaque qui possimus alias perferendis. Maiores iure tenetur blanditiis at enim obcaecati aut rerum veniam saepe?",
  },
  {
    image: AVTR2,
    name: 'avatar',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quisquam quaerat voluptatum, rerum eaque qui possimus alias perferendis. Maiores iure tenetur blanditiis at enim obcaecati aut rerum veniam saepe?",
  },
  {
    image: AVTR3,
    name: 'Aomine',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quisquam quaerat voluptatum, rerum eaque qui possimus alias perferendis. Maiores iure tenetur blanditiis at enim obcaecati aut rerum veniam saepe?",
  },
  {
    image: AVTR4,
    name: 'Avatar daughter',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quisquam quaerat voluptatum, rerum eaque qui possimus alias perferendis. Maiores iure tenetur blanditiis at enim obcaecati aut rerum veniam saepe?",
  },
  {
    image: AVTR5,
    name: 'Ayanokoji',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quisquam quaerat voluptatum, rerum eaque qui possimus alias perferendis. Maiores iure tenetur blanditiis at enim obcaecati aut rerum veniam saepe?",
  }

]
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // l'import doit être dans la balise Swiper
      modules={[Pagination, Navigation, Scrollbar ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // pagination={{ clickable: true }}
      // navigation 
      >
        {
          data.map(({image, name, review}, index) => { // on utilise index ici au lieu de id 
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt='avatar'/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials