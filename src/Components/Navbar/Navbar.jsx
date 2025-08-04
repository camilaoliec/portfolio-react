import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

const [menu,setMenu] = useState("Accueil");

  return (
    <section className='nav'>
      <img src={Logo} alt="Logo du site" />
      <ul className="nav__menu">
        <li>
          <a href="#Accueil" onClick={()=>setMenu("Accueil")} 
          aria-current={menu==="Accueil" ? "page" : "undefined"}>
            Accueil
          </a>
          {menu==="Accueil" ? <img src={underline} alt="Soulignement" />:<></>}
        </li>
        <li>
          <a href='#Apropos' onClick={()=>setMenu("À propos")}
          aria-current={menu==="À propos" ? "page" : "undefined"}>
            À propos
          </a>
          {menu==="À propos" ? <img src={underline} alt="Soulignement" />:<></>}</li>
        <li>
          <a href='#Formations' onClick={()=>setMenu("Formations")} 
          aria-current={menu==="Formations" ? "page" : "undefined"}>
            Formations
          </a>
          {menu==="Formations" ? <img src={underline} alt="Soulignement" />:<></>}
        </li>
        <li>
          <a href='#Projets' onClick={()=>setMenu("Projets")}
          aria-current={menu==="Projets" ? "page" : "undefined"}>
            Projets
          </a>{menu==="Projets"?<img src={underline} alt="Soulignement" />:<></>}
        </li>
        <li>
          <a href='#Contact' onClick={()=>setMenu("Contact")}
          aria-current={menu==="Contact" ? "page" : "undefined"}>
            Contact
          </a>{menu==="Contact"?<img src={underline} alt="Soulignement" />:<></>}
        </li>
      </ul>
      <a href='#Contact' className="nav__connect" alt="Bouton de la section Contact" >Contactez-moi</a>
    </section>
  )
}

export default Navbar
