import React from 'react'
import './Education.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import Education_Data from '../../assets/education_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Education = () => {
  return (
    <section className='education'>
      <div className="education__title">
        <h1>Formations</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education__container">
        {Education_Data.map((education,index)=>{
            return <div key={index} className="education__format">
                <h3>{education.s_date}</h3>
                <h2>{education.s_name}</h2>
                <h4>{education.s_school}</h4>
                <p>{education.s_desc}</p>
                <div className="education__readmore">
                    <p>Savoir plus</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            })}
      </div>
    </section>
  )
}

export default Education
