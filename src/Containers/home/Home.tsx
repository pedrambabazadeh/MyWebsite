import React from 'react'
import './home.css'
import { useLanguage } from '../../Hooks/LanguageContext'
import  {db} from '../../db'
import { Translations } from '../../Types/translations'

interface Db {
  [key: string]: Translations;
}
const typedDb: Db = db;

const Home = () => {
  const [language]= useLanguage();
  return (
    <div className='right-container'>
            <h1> {typedDb[language].home.title}</h1>
            <p>
                {typedDb[language].home.description}
            </p>
        </div>
  )
}

export default Home