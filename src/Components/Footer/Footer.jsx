import React from "react";
import "./Footer.scss";
import footer_logo from "../../assets/footer_logo.svg";
import mail_icon from "../../assets/mail_icon-footer.svg";
import call_icon from "../../assets/call_icon-footer.svg";
import linkedin_icon from "../../assets/linkedin_icon-footer.svg";
import github_icon from "../../assets/github_icon-footer.svg";
import heart_icon from '../../assets/heart_icon.svg'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <img src={footer_logo} alt="" />
          <p>
            Développement web avec la sensibilité d'une artiste.
          </p>
        </div>
        <div className="footer__top-right">
          <div className="footer__col">
            <div className="footer__contact">
              <img src={mail_icon} alt="" />
              <p>potycamila@gmail.com</p>
            </div>
            <div className="footer__contact">
              <img src={call_icon} alt="" />
              <p>+33 6 08 00 73 62</p>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__contact">
              <img src={linkedin_icon} alt="" />
              <a href="https://www.linkedin.com/in/camilamedeiros/">Linkedin</a>
            </div>
            <div className="footer__contact">
              <img src={github_icon} alt="" />
              <a href="https://github.com/camilaoliec">Github</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <p>© 2025 Camila Medeiros.</p>
        <p>Tous droits réservés.</p>
        <p>Conçu avec passion<img src={heart_icon} alt="" /></p>
        
      </div>
    </section>
  );
};

export default Footer;
