import React from 'react'
import './MyProjects.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import myprojects_data from '../../assets/myprojects_data'

const MyProjects = () => {
  return (
    <section id='Projets' className='myprojects'>
      <div className="myprojects__title">
        <h1>Mes projets</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myprojects__container">
        {myprojects_data.map((projects,index)=>{
            return (
              <div key={index} className="project">
                <img src={projects.p_img} alt="image du projet" />
                <div className="project__box">
                  <div className="project_description">
                    <h2>{projects.p_title}</h2>
                    <p>{projects.p_description}</p>
                    <h4>{projects.p_technos}</h4>
                  </div>  
                  <div className="project__links">
                    {projects.p_code_link ? <a href={projects.p_code_link} target='_blank' rel='noopener noreferrer'>Code source</a> : null}
                    {projects.p_site_link ? <a href={projects.p_site_link} target='_blank' rel='noopener noreferrer'>Voir le site</a> : null}
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default MyProjects
