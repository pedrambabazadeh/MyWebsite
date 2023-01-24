import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import './darkLight.css'

const DarkLight = () => {
  return (
    <div className='dark-light'>
    <ul className='dark-light-ul' data-color="">
        <li className='dark-light-li' title='dark-mode' data-represent='dark-mode'>
           <FaSun /> 
        </li>
        <li className='dark-light-li' title='light-mode' data-represent='light-mode'>
          <FaMoon/>
        </li>
    </ul>
    </div>
  )
}

export default DarkLight