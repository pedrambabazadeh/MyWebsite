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
          <div className='resume-experience'>  
            <h3 className='resume-h3'>
              F.M. <span className='resume-headline'> Frontend Developer</span>
            </h3>  
            <h4 className='resume-h4'>
            2020 – 2021
            </h4>   
            <p className='resume-p'>
            Collaborated with senior programmers and other teams to make PWA and SPA web templates.
            Worked with modern technologies and libraries including React.js.
            </p>
          </div>
          <div className='resume-experience'>  
            <h3 className='resume-h3'>
              Poya Host <span className='resume-headline'> UI Developer</span>
            </h3>  
            <h4 className='resume-h4'>
            2018 – 2019
            </h4>   
            <p className='resume-p'>
            Solved the problem of direction in various web templates. Changed the directions from LTR to RTL for 
Persian websites and redesigned the templates.
            </p>
          </div>


        </section>

      </div>
      
    {/* Use Display: Grid*/}

    </div>
  )
}

export default Resume