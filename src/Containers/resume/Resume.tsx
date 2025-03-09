import React from 'react'
import './resume.css'
import { cvData as CV } from './cvData'

const Resume = () => {
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
          {CV.header}
          </p>

        </section>

        <section className='resume-work'>
          <h2 className='resume-h2'>
            Experience
          </h2>
          <div className='resume-body'>
            {
              CV.experiences.map((item) => {
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
              CV.certificates.map((item) => {
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
              {CV.technicalSkills.map((skill) => <li><span>{skill.skill}:</span> <br/>{skill.description}</li>)}
            </ul>
          </div>
        </section>

        <section className='resume-skills'>
          <h2 className='resume-h2'>Soft skills</h2>
          <div className="resume-body">
            <ul className="skills">
              {CV.softSkills.map((skill) => <li><span>{skill.skill}:</span> <br/>{skill.description}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume