import React from 'react'
import './About.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'
import theater_masks from  '../../assets/theater_masks.svg'
import paint_pallette from '../../assets/paint_pallette.svg'
import brain_icon from '../../assets/brain_icon.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about__title">
            <h1>À propos de moi</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about__sections">
            <div className="about__left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about__right">
                <div className="about__texts">
                    <p>Mauris maximus, erat in accumsan euismod, sapien est porta eros, ac venenatis neque purus id nisl. Maecenas ut tortor sed risus porta tincidunt vel vel mauris. Nullam porttitor, risus sit amet vehicula suscipit, lectus nulla dapibus turpis, sed tempor odio risus quis enim. Proin id porta lacus.</p>
                    <p>Vestibulum laoreet lobortis tellus at pulvinar. Morbi vitae nisl nisi. Vestibulum suscipit finibus ligula, eget feugiat enim maximus eu. </p>
                </div>
                <div className="about__skills">
                    <div className="about__skill"><p>HTML</p>
                        <div className="skill__bar">
                            <div className="skill__bar-fill" style={{ width:"70%" }}></div>
                        </div>
                    </div>
                    <div className="about__skill"><p>CSS & SASS</p>
                        <div className="skill__bar">
                        <div className="skill__bar-fill" style={{ width:"75%" }}></div>
                    </div>
                    </div>
                    <div className="about__skill"><p>React JS</p>
                        <div className="skill__bar">
                        <div className="skill__bar-fill" style={{ width:"60%" }}></div>
                    </div>
                    </div>
                    <div className="about__skill"><p>JavaScript</p>
                        <div className="skill__bar">
                        <div className="skill__bar-fill" style={{ width:"65%" }}></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about__soft-skills">
            <div className="about__soft-skill">
                <img src={theater_masks} alt="" />
                <h2>Traveil d'équipe et coopération</h2>
                <p>8 ans sur scène et en pédagogie m’ont appris à collaborer avec écoute et fluidité</p>
            </div>
            <hr />
            <div className="about__soft-skill">
                <img src={paint_pallette} alt="" />
                <h2>Créative</h2>
                <p>Artiste dans l'âme, je peins à l’aquarelle et trouve des solutions avec créativité.</p> 
            </div>
            <hr />
            
            <div className="about__soft-skill">
                <img src={brain_icon} alt="" /><h2>Proactive</h2>
                <p>Toujours prête à anticiper les besoins et à passer à l’action sans attendre.</p> 
            </div>
        </div>
    </div>
  )
}

export default About
