import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={Logo} alt="" />
      <ul className="nav__menu">
        <li>Accueil</li>
        <li>À propos</li>
        <li>Expériences</li>
        <li>Portfolio</li>
        <li>Compétences</li>
        <li>Contact</li>
      </ul>
      <div className="nav__connect">Contactez-moi</div>
    </div>
  )
}

export default Navbar
