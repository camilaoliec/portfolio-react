import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import MyProjects from './Components/MyProjects/MyProjects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Education />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
