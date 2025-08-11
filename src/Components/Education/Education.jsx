import React, { useState } from 'react'
import './Education.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import Education_Data from '../../assets/education_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggleMore = (index) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }
  return (
    <section id='Formations' className='education'>
      <div className="education__title">
        <h1>Formations</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education__container">
        {Education_Data.map((education, index) => (
            <div key={index} className="education__format">
                <h3>{education.e_date}</h3>
                <h2>{education.e_name}</h2>
                <h4>{education.e_school}</h4>
                <p>{education.e_desc}</p>
                
                {activeIndex === index && (
                  <div className='education__details'>
                    <p>{education.e_more}</p>
                  </div>
                )}
                <div className="education__readmore" onClick={() => toggleMore(index)}>
                    <p>{activeIndex === index ? "Voir moins" : "Savoir plus"}</p>
                    <img src={arrow_icon} alt="flèche" />
                </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Education
