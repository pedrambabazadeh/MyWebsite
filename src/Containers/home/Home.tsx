import React, { useEffect, useState } from 'react'
import './home.css'
import { useLanguage } from '../../Hooks/LanguageContext'
import { db } from '../../db'
import { Translations } from '../../Types/translations'
import { TypeMachine } from '../../Utils/TypeMachine'

interface Db {
  [key: string]: Translations;
}
const typedDb: Db = db;

const Home = () => {
  const [language] = useLanguage();
  
  return (
    <div className='right-container'>
      <h1>{typedDb[language].home.title}</h1>
        <TypeMachine entry={typedDb[language].home.description} speed={50} />
    </div>
  )
}

export default Home