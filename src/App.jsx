import React from 'react'

import HowItWorks from './components/HowItWorks'
import LogoScroll from './components/LogoScroll'
import Home from './components/Home'
import { BiCollection } from 'react-icons/bi'
import Collection from './components/collection'
import ButtonList from './components/ButtonList'
import ButtonCards from './components/ButtonCards'
import Content from './components/Content'
import Service from './components/Service'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
       <Home />
       <HowItWorks />
       <LogoScroll />
       <Collection />
       <ButtonList />
       <ButtonCards />
       <Content />
       <Service />
      <Testimonials />
      <Contact />
      <Download/>
      <Footer />
    </div>
    
  )
}

export default App