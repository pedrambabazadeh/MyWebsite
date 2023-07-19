import React from 'react'
import './resume.css'

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
          As a junior front-end developer, I am passionate
about creating engaging and intuitive user
interfaces that improve the user experience. I
have experience with HTML, CSS, and JavaScript,
having developed several projects including
responsive websites and web applications. I have
also worked with popular frontend frameworks
and libraries such as React.js, jQuery, and
Bootstrap, and am eager to continue learning and
using new technologies. Collaborating with other
team members is a strength of mine, and I am
dedicated to writing clean and efficient code
that meets project requirements.
          </p>

        </section>

        <section className='resume-work'>
          <h2 className='resume-h2'>
            Experience
          </h2>
          <div className='resume-body'>
            <div className='resume-item'>  
              <h3 className='resume-h3'>
                Poya Host <span className='resume-headline'> Front-end Developer trainee</span>
              </h3>  
              <h4 className='resume-h4'>
              oct 2018 – oct 2019
              </h4>   
              <p className='resume-p'>
              Solved the problem of direction in various web templates. Changed the directions from LTR to RTL for 
  Persian websites and redesigned the templates.
              </p>
            </div>
          </div>

        </section>
        <section className='resume-education'>
          <h2 className='resume-h2'>
            Certificates
          </h2>
          <div className='resume-body'>
            <div className='resume-item'>
                <h3 className='resume-h3'>
                  JS Programming<span className='resume-headline'>Meta Ltd</span>
                </h3>
                <h4 className='resume-h4'>
                 2024 | 5 weeks
                </h4>
                <p className='resume-p'>
              verification link is available bellow:
              </p>
              <a className='resume-a' href="https://www.coursera.org/account/accomplishments/certificate/DXRQ5C4GPATC" download>Click Here</a>
            </div>
            <div className='resume-item'>
                <h3 className='resume-h3'>
                  ReactJS<span className='resume-headline'>Tehran institute of technology</span>
                </h3>
                <h4 className='resume-h4'>
                  2023 | 60 Hours
                </h4>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Resume