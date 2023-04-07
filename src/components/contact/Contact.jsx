import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'

import { useRef } from 'react';
import emailjs from 'emailjs-com'; // @emailjs-com = nom du browser utiliser et installer

function Contact() {
  const form = useRef(); //rel={}

  const sendEmail = (e) => { //onSubmit={}
    e.preventDefault()
    
    emailjs.sendForm('service_bys6u2a', 'template_zq1kl5a', form.current, 'uWXlbCd7_NIeQpk8C') //('Email Services', 'Email Templates', form.current, )

    e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <AiOutlineMail className='contact__option-icon'/ >
            <h4>Email</h4>
            <h5>suprenando12@gmail.com</h5>
            <a href="mailto:suprenando12@gmail.com">Send a message</a> {/*mailto:E-mail = permet de relier a son Email*/}
          </article>
          <article className="contact__option">
             <RiMessengerLine className='contact__option-icon'/ >
            <h4>Messenger</h4>
            <h5>Ali Nando</h5>
            <a href="https://m.me/nando.ali.140">Send a message</a> {/**http//m.me/lien_profil_FB = permet de relier avec messenger*/}
            {/* "https://api.whatsapp.com/send?phone+261340418032" = permet de relier avec Whatsapp */}
          </article>
          <article className="contact__option">
            <BiPhoneCall className='contact__option-icon'/ >
            <h4>Appel</h4>
            <h5>+231 34 04 180 32</h5>
            <a href="tel:0340418032">Call</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}> {/*a utiliser dans au cas emailjs-com */}
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact