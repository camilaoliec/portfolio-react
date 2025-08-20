import React from 'react'
import './Contact.scss'
import theme_patthern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon-contact.svg'
import call_icon from '../../assets/call_icon-contact.svg'
import linkedin_icon from '../../assets/linkedin_icon-contact.svg'
import github_icon from '../../assets/github_icon-contact.svg'
import location_icon from '../../assets/location_icon-contact.svg'


export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59a18cb0-1139-4e2e-998f-92b0cbb29941");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Formulaire soumis avec succès");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id='Contact' className='contact'>
      <div className="contact__title">
          <h1>Contactez-moi</h1>
          <img src={theme_patthern} alt="" />
        </div>
      <div className="contact__section">
        <div className="contact__left">
            <p>Vous avez un projet web ou besoin d’un site vitrine, portfolio ou application sur-mesure ? </p>
            <p>N'hésitez pas à me contacter pour discuter de vos besoins !</p>
            <p>Je vous répondrai dans les plus brefs délais.</p>
            <div className="contact__details">
                <div className="contact__detail">
                <img src={mail_icon} alt="e-mail" /> <p>potycamila@gmail.com</p>
                </div>
                <div className="contact__detail">
                    <img src={call_icon} alt="telephone" />
                    <p>+33 x xx xx xx xx</p>
                </div>
                <div className='contact__detail'>
                  <img src={linkedin_icon} alt="Linkedin" />
                  <a href="https://www.linkedin.com/in/camilamedeiros/">Linkedin</a>
                </div>
                <div className='contact__detail'>
                  <img src={github_icon} alt="github" />
                  <a href="https://github.com/camilaoliec">Github</a>
                </div>
                <div className="contact__detail">
                    <img src={location_icon} alt="emplacement" />
                    <p>Thonon-les-Bains, France</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact__right">
            <label htmlFor="name">Nom et prénom</label>
            <input type="text" placeholder='Entrez votre nome et prénom' name='name' required />
            <label htmlFor='email'>Adresse Email</label>
            <input type="email" placeholder='Entrez votre email' name='email' required />
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="8" placeholder='Entrez votre message' required></textarea>
            <button type='submit' className="contact__submit">Envoyer</button>
            {result && <p className='contact__result'>{result}</p>}
        </form>
      </div>
    </section>
  )
}
