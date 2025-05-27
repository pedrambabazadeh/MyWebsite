import React from 'react'
import {db} from '../../db'
import { Translations } from '../../Types/translations'
import { useLanguage } from '../../Hooks/LanguageContext'
import { TypeMachine } from '../../Utils/TypeMachine'

const About = () => {

  const [language]= useLanguage();
  interface Db {
    [key: string]: Translations;
  };
  const typedDb: Db = db;
  return (
    <div className='about'>
       <div className='about-container'>
          <header>
            <h1>{typedDb[language].about.title}</h1>
          </header>
          <section id="about-me" className="about-me">
             <TypeMachine entry={typedDb[language].about.description} speed={40} />
          </section>
        </div>
    </div>
  )
}

export default About