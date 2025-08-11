import React, { useRef, useState } from 'react'
import './Navbar.scss'
import Logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

const [menu,setMenu] = useState("Accueil");
const menuRef = useRef();

const openMenu = () => {
  menuRef.current.style.right="0";
}
const closeMenu = () => {
  menuRef.current.style.right="-350px";
}

  return (
    <section className='nav'>
      <img src={Logo} alt="Logo du site" />
      <img src={menu_open} onClick={openMenu} alt="menu" className='nav-mob-open'/>{}
      <ul ref={menuRef} className="nav__menu">
        <img src={menu_close} onClick={closeMenu} alt="fermer" className="nav-mob-close" />
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
