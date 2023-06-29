import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import App from './App'

const Rooter = () => {
  return (
    <Router>
        <Routes>
            {' '}
            <Route path='/about' exact element={<About />} />
            <Route path='/' exact element={<App />} />
            <Route path='/experience' exact element={<Experience />} />
            <Route path='/portfolio' exact element={<Portfolio />} />
            <Route path='/contact' exact element={<Contact />}/>
            <Route path='/footer' exact element={<Footer />} />
            

        </Routes>
    </Router>
  )
}

export default Rooter