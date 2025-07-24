import React from 'react'
import './Contact.scss'
import theme_patthern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <section className='contact'>
        <div className="contact__title">
            <h1>Contactez-moi</h1>
            <img src={theme_patthern} alt="" />
        </div>
      <div className="contact__section">
        <div className="contact__left">
            <p>Mauris maximus, erat in accumsan euismod, sapien est porta eros, ac venenatis neque purus id nisl. Maecenas ut tortor sed risus porta tincidunt vel vel mauris.</p>
            <div className="contact__details">
                <div className="contact__detail">
                <img src={mail_icon} alt="" /> <p>potycamila@gmail.com</p>
                </div>
                <div className="contact__detail">
                    <img src={call_icon} alt="" />
                    <p>+33 6 08 00 73 62</p>
                </div>
                <div className="contact__detail">
                    <img src={location_icon} alt="" />
                    <p>Thonon-les-Bains, France</p>
                </div>
            </div>
        </div>
        <form className="contact__right">
            <label htmlFor="name">Nom et prénom</label>
            <input type="text" placeholder='Entrez votre nome et prénom' name='name' />
            <label htmlFor='email'>Adresse Email</label>
            <input type="email" placeholder='Entrez votre email' name='email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="8" placeholder='Entrez votre message'></textarea>
            <button type='submit' className="contact__submit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
