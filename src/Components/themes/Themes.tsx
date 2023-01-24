import React from 'react'
import { myColors } from '../social-media/Social'
import './themes.css'

interface ThemesProps{
  colorChange(data: myColors):void 
}

const Themes = (props:ThemesProps) => {
  return (
    <div className='themes'>
    <ul className='themes-ul'>
        <li className='themes-li' title='Red' data-represent='red' onClick={()=>{props.colorChange('Red')}}></li>
        <li className='themes-li' title='Blue' data-represent='blue'  onClick={()=>{props.colorChange('Blue')}}></li>
        <li className='themes-li' title='Green' data-represent='green'  onClick={()=>{props.colorChange('Green')}}></li>
    </ul>
</div>
  )
}

export default Themes