import React from 'react'
import { useLanguage } from '../../Hooks/LanguageContext'
import './language-changer.css'


const LanguageChanger = () => {
  const [language, setLanguage]= useLanguage();
  return (
    <div>
      lang: {language}
        <ul className='language-changer' data-display="flex space-evenly">
            <li className='language-changer-li' onClick={() =>setLanguage('en')} title='English' data-represent='en'> English</li>
            <li className='language-changer-li' onClick={() =>setLanguage('de')} title='German' data-represent='fr'> German</li>
           {/* <li className='language-changer-li' onClick={() =>setLanguage('ar')} title='Arabic' data-represent='ar'> Arabic</li>
            <li className='language-changer-li' onClick={() =>setLanguage('fa')} title='Persian' data-represent='fa'> Persian</li>*/}
        </ul>
    </div>
  )
}
export default LanguageChanger
