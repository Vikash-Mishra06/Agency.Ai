import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Title from './components/Title'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.getItem('light'))

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
    </div>
  )
}

export default App