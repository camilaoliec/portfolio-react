import React from "react";
import "./Profile.scss";
import profile_img from "../../assets/profile_img.svg";

const Profile = () => {
  return (
    <section className="profile">
      <img src={profile_img} alt="" />
      <h1><span>Camila Medeiros,</span> développeuse front-end</h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="profile__action">
        <div className="profile__connect">connectez-vous avec moi</div>
        <div className="profile__resume">Télécharger mon CV</div>
      </div>
    </section>
  );
};

export default Profile;
