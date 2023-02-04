import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import './darkLight.css'
export type backColors ="Dark" | "Light";

interface DarkLightProps{
  backChange (backColor:backColors) : void;
  back: backColors
}
const DarkLight = (props:DarkLightProps) => {
  return (
    <div className='dark-light'>
    <ul className='dark-light-ul' data-color="" data-back={props.back}>
        <li className='dark-light-li' title='dark-mode' data-represent='light-mode' onClick={()=>{props.backChange("Light")}}>
           <FaSun /> 
        </li>
        <li className='dark-light-li' title='light-mode' data-represent='dark-mode' onClick={()=>{props.backChange("Dark")}}>
          <FaMoon/>
        </li>
    </ul>
    </div>
  )
}

export default DarkLight