import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import MyProjects from './Components/MyProjects/MyProjects'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Education />
      <MyProjects />
      <Contact />
    </div>
  )
}

export default App
