import React from "react";
import "./Profile.scss";
import profile_img from "../../assets/profile_img.svg";

const Profile = () => {
  return (
    <section id="Accueil" className="profile">
      <img src={profile_img} alt="" />
      <h1><span>Camila Medeiros,</span> développeuse front-end</h1>
      <p>
        Développeuse front-end passionnée par la création de sites web modernes, réactifs et accessibles.
      </p>
      <div className="profile__action">
        <a href="#Contact" className="profile__connect">Contactez-moi</a>
        <a className="profile__resume">Télécharger mon CV</a>
      </div>
    </section>
  );
};

export default Profile;
