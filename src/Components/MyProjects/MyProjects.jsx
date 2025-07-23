import React from 'react'
import './MyProjects.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import myprojects_data from '../../assets/myprojects_data'

const MyProjects = () => {
  return (
    <section className='myprojects'>
      <div className="myprojects__title">
        <h1>Mes projets</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myprojects__container">
        {myprojects_data.map((projects,index)=>{
            return <img key={index} src={projects.p_img} alt="" />
        })}
      </div>
    </section>
  )
}

export default MyProjects
