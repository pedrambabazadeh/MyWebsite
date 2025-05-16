import React from 'react'
import './resume.css'
import { cvData as CV } from './cvData'
import { useLanguage } from '../../Hooks/LanguageContext'
import { CV as CVType } from '../../Types/cv'

interface Resume {
  [key: string]: CVType;
}
const typedCV: Resume = CV;

const Resume = () => {
  const [language] = useLanguage();
  return (
    <div className='resume'>

      <h1 className='resume-title'>
        Resume
      </h1>

    {/* From Here*/}
    {/* Make the sections drop down using the section tag selector */}
    {/* What if each section in this holds a component beind drop-down using states
    and another component inside hat component for the text?*/}
    {/* Use Display: Grid*/}

      <div className='resume-container'>
        <section className='resume-intro'>
          <h2 className='resume-h2'>
            Introduction
          </h2>
          <p className='resume-intro-p resume-p'>
          {typedCV[language].header}
          </p>

        </section>

        <section className='resume-work'>
          <h2 className='resume-h2'>
            Experience
          </h2>
          <div className='resume-body'>
            {
              typedCV[language].experiences.map((item) => {
                return  ( 
                  <div className='resume-item'>
                    <h3 className='resume-h3'>
                      {item.title} <span> {item.company}</span>
                    </h3>
                    <h4 className='resume-h4'>{item.time}</h4>
                    <p className='resume-p'>
                      {item.description}
                    </p>
                  </div>
                )})
            }
          </div>

        </section>
        <section className='resume-education'>
          <h2 className='resume-h2'>
            Certificates
          </h2>
          <div className='resume-body'>
          {
              typedCV[language].certificates.map((item) => {
                return  (
                  <div className='resume-item'>
                    <h3 className='resume-h3'>
                      {item.title} <span> {item.company}</span>
                    </h3>
                    <h4 className='resume-h4'>{item.time}</h4>
                    <p className='resume-p'>
                    verification link is available bellow:
                    </p>
                    <a className='resume-a' href={item.link} download>Click Here</a>
                  </div>
                )})
            }
          </div>
        </section>
        <section className='resume-skills'>
          <h2 className='resume-h2'>Technical skills</h2>
          <div className="resume-body">
            <ul className="skills">
              {typedCV[language].technicalSkills.map((skill) => <li><span>{skill.skill}:</span> <br/>{skill.description}</li>)}
            </ul>
          </div>
        </section>

        <section className='resume-skills'>
          <h2 className='resume-h2'>Soft skills</h2>
          <div className="resume-body">
            <ul className="skills">
              {typedCV[language].softSkills.map((skill) => <li><span>{skill.skill}:</span> <br/>{skill.description}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume