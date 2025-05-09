import React from 'react'


export const LanguageChnger = () => {
  return (
    <div>
        <ul className='language-changer'>
            <li className='language-changer-li' title='English' data-represent='en'> English</li>
            <li className='language-changer-li' title='German' data-represent='fr'> German</li>
            <li className='language-changer-li' title='Arabic' data-represent='ar'> Arabic</li>
            <li className='language-changer-li' title='Persian' data-represent='fa'> Persian</li>
        </ul>
    </div>
  )
}
